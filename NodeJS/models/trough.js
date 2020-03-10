const mongoose = require('mongoose');

//var { DataByDateSchema } = require('./dataByDate.js');

var DataSchema = new mongoose.Schema({
    time: {type: Date},
    data: {
        temperature:{
            top : {type : Number},
            bottom : {type : Number}
        },

        humidity:{
            top: {type : Number},
            bottom : {type: Number}
        }
    }
});

var DataByHourSchema = new mongoose.Schema({
    hour:{ type: Number },
    start:[DataSchema],
    middle:[DataSchema],
    end:[DataSchema]
});

var DataByDateSchema = new mongoose.Schema({
    date: { type: String},
    dataByHour : [DataByHourSchema]
});


var Trough = mongoose.model('Trough', {
    name: {type:String, unique : true, required : true, dropDups: true },
    dataByDate: [DataByDateSchema]
});

module.exports = {Trough};