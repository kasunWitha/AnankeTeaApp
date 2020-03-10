var { Setting } = require('../models/setting');

const createNewSetting = (troughId, criticalTemp,tempTimeout, criticalBulbdiffHigh,criticalBulbdiffLow,bulbdiffTimeout, callback)=>{
    var newSetting = new Setting({
        trough: troughId,
        criticalTemp: criticalTemp,
        tempTimeout: tempTimeout,
        criticalBulbdiffHigh:criticalBulbdiffHigh,
        criticalBulbdiffLow: criticalBulbdiffLow,
        bulbdiffTimeout:bulbdiffTimeout
    });
    newSetting.save((err, doc)=>{
        if(!err) callback(doc)
        else callback("Error :"+ err)
    });
}

const findAll = (callback)=>{
    Setting.find((err, docs)=>{
        if(!err) callback(docs);
        else callback("Error :"+err);
    });
}

const findByTrough=(name, callback)=>{
    Setting.find({trough:name}, (err));
}

module.exports = { createNewSetting, findAll }
