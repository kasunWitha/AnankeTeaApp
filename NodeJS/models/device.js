const mongoose = require('mongoose');

var Device = mongoose.model('Device',{
    name: {type : String, unique : true, required : true, dropDups: true },
    trough:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trough"
    },
    position:{type: String, required : true}
});

module.exports = {Device}