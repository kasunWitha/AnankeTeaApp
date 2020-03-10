var { Trough } = require('../models/trough');

const getAll = (callback) =>{
    Trough.find((err, docs) =>{
        if(!err) callback(docs);
        else{
            console.log('Error retrieving all data: ', err);
            callback("Error");
        }
    });
}

const createNewTrough = (troughName, callback) =>{
    var newTrough = new Trough({
        name: troughName,
        dataByDate: []
    });

    newTrough.save((err, doc) =>{
        if(!err) callback(doc);
        else{
            console.log('Error creating trough: ', err);
            callback("Error");
        }
    });
}

const createNewDate = (troughName, dateName, callback) =>{
    var trough = new Trough();
    var newDate = trough.dataByDate.create({
        date: dateName,
        dataByHour:[]
    });
    Trough.update({name: troughName}, 
       {$push:{dataByDate: newDate}},
       (err, doc)=>{
           if(!err) {
               if(doc.n == 0){
                   createNewTrough(troughName,(resp)=>{
                       Trough.update({name:troughName},
                        {
                            $push:{dataByDate: newDate}
                        }, (err, doc)=>{
                            if(!err) callback(doc);
                            else callback(err);
                        }
                        );
                   })
               }else{
                   callback(doc);
               }
           }
           else callback("error");
       } 
    );
}

    const createNewHour = (troughName, dateName, hourName, callback)=>{
        var trough = new Trough();
        // var newHour = trough.dataByDate.dataByHour.create({
        //     hour: hourName,
        //     start: [],
        //     middle: [],
        //     end: []
        // });

        Trough.update({ name:troughName},
            {$push:{
                    'dataByDate.$[i].dataByHour':{
                        hour: hourName,
                        start: [],
                        middle: [],
                        end: []
                    }
                }
            },
            {
                arrayFilters: [
                    {
                        'i.date': dateName
                    }
                ]
            },
            (err, doc) =>{
                if(!err) {
                    if(doc.nModified == 0){
                        createNewDate(troughName, dateName, (result)=>{
                            
                            Trough.update({ name:troughName},
                                {$push:{
                                        'dataByDate.$[i].dataByHour':{
                                            hour: hourName,
                                            start: [],
                                            middle: [],
                                            end: []
                                        }
                                    }
                                },
                                {
                                    arrayFilters: [
                                        {
                                            'i.date': dateName
                                        }
                                    ]
                                }, (err, docs) =>{
                                    if(!err) callback(docs);
                                    else callback("Error");
                                });
                        });
                    }else callback(doc);
                }
                else callback("Error");
            }
        );
    }




module.exports = { getAll, createNewTrough, createNewDate, createNewHour };