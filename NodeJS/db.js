const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AnankeTeaApp', (err) =>{
    if(!err){
        console.log("Database Successfully COnnected.");
    }else{
        console.log('Error in Database Connection:', JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;