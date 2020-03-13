const deviceController = require('../controllers/deviceController');
const troughController = require('../controllers/troughController');
const alertHandler = require('./alertHandler');
const broadcastHandler = require('./broadcastHandler');
const calc = require('../calculations');

var { Device } = require('../models/device');
var { Trough } = require('../models/trough');




const parseDeviceMessage = (message) =>{
    try{
        try{
            var jsonMsg = JSON.parse(message);
            var deviceName = Object.keys(jsonMsg)[0];
            
            var tempArr = jsonMsg[deviceName].Temperature.replace(/\*C/g, "" ).replace().split(" ").map(Number);
            var humArr = jsonMsg[deviceName].Humidity.replace(/%/g, "" ).replace().split(" ").map(Number);
        }catch(err){
            var inArr = parseNoJSONDeviceMsg(message);
            var tempArr = inArr[1];
            var humArr = inArr[0]
            var deviceName = "ANANKENODE001";
        }
        
        var bulbDifference = [calc.calculateBulbDiff(tempArr[0], humArr[0]), calc.calculateBulbDiff(tempArr[1], humArr[1])] ;
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
                    },
                    bulbDiff:{
                        top: bulbDifference[0],
                        bottom: bulbDifference[1]
                    }
                }
            }

            alerts = alertHandler.handleAlerts("trough1", 2, data);

            broadcastHandler.broadcastMsg(device.trough.name, device.position, data, alerts);


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


const parseNoJSONDeviceMsg=(message)=>{
    try{

        var editedMsg = message.replace(/{ANANKETEANODE001:/g, "").replace(/}/g, "").replace("[", "").replace("]", "")
        var arr = editedMsg.split(",");
        var humArray = arr[0].replace("Humidity:", "").replace(/%/g, "").replace(/\t/g, "").trim().split(" ");
        var tempArray = arr[1].replace("Temperature :", "").replace(/\*C/g, "").replace(/\t/g, "").trim().split(" ");
        console.log("Array", arr, tempArray, humArray);
        var outArr = [humArray.map(Number), tempArray.map(Number)];
        
    }catch (err){
        console.log(err);
        var outArr = [[0,0], [0,0]];

    }

    return outArr;

   // var humArray = arr[0].replace("Humidity:", "").replace(/%/g, "").replace(/\t/g, "").trim().split(" ");
    //var tempArray = arr[1].replace("Temperature:", "").replace(/\*C/g, "").replace(/\t/g, "").trim().split(" ");
    

    
}


module.exports = {parseDeviceMessage}