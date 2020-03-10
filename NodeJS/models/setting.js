const mongoose = require('mongoose');

var Setting = mongoose.model('Setting',{
    trough:{
        type:  String,
        unique: true,
        required: true,
        dropDups: true
    },
    criticalTemp:{type:Number},

    tempTimeout:{type:Number},
    
    criticalBulbdiffHigh:{type: Number},

    criticalBulbdiffLow:{type: Number},

    bulbdiffTimeout:{type: Number}
});

module.exports = { Setting }