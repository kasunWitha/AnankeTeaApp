const deviceController = require('../controllers/deviceController');
const troughController = require('../controllers/troughController');
var { Device } = require('../models/device');
var { Trough } = require('../models/trough');

const parseDeviceMessage = (message) =>{
    try{
        var jsonMsg = JSON.parse(message);
        var deviceName = Object.keys(jsonMsg)[0];

        var tempArr = jsonMsg[deviceName].Temperature.replace(/\*C/g, "" ).replace().split(" ").map(Number);
        var humArr = jsonMsg[deviceName].Humidity.replace(/%/g, "" ).replace().split(" ").map(Number);

        deviceController.findByName(deviceName, (doc)=>{
            var device = new Device(doc);
            console.log(device.trough.name);
            console.log(getDate());
            console.log(getHour());
            console.log(humArr);
            //var trough = new Trough()
            var data = {
                time : Date.now(),
                data:{
                    temperature:{
                        top: tempArr[0],
                        bottom: tempArr[1]
                    },

                    humidity:{
                        top: humArr[0],
                        bottom: humArr[1]
                    }
                }
            }

            troughController.addData(device.trough.name, getDate(), getHour(), device.position, data, (res)=>{
                console.log(res);
            });
        });
    }catch(err){
        console.log(err);
    }
}


const getDate = ()=>{
    timestamp = new Date();
    return timestamp.getFullYear()+"-"+(timestamp.getMonth()+1)+"-"+timestamp.getDate();
}

const getHour = ()=>{
    timestamp = new Date();
    return timestamp.getHours();
}


module.exports = {parseDeviceMessage}