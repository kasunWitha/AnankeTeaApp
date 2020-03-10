const mongoose = require('mongoose');

var Setting = mongoose.model('Setting',{
    trough:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Trough'
    },
    criticalTemp:{type:Number},

    tempTimeout:{type:Number},
    
    criticalBulbdiff:{type: Number},

    bulbdiffTimeout:{type: Number}
});

module.exports = { Setting }