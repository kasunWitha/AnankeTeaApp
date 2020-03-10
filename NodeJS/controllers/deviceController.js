var { Device } = require('../models/device');

const createNewDevice= (deviceName, troughId, position, callback)=>{
    var newDevice = new Device({
        name: deviceName,
        trough: troughId,
        position: position
    });

    newDevice.save((err, doc)=>{
        if(!err) callback(doc);
        else callback("Error: " + err);
    });
}

const findByName = (deviceName, callback) =>{
    Device.findOne({name: deviceName}).populate("trough").then((doc)=>{
        if(!doc) callback("eRROR ;");
        else callback(doc)
    });
}



module.exports = { createNewDevice, findByName }