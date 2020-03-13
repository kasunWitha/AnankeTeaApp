const settingController = require('../controllers/settingController');

var settingsArr;
settingController.findAll((docs)=>{
    settingsArr=docs;
});



const handleAlerts = (trough, position, data)=>{

    var alerts = {
        temperature:{
            top:{
                alertType:0,
                message: ""
            },
            bottom:{
                alertType:0,
                message:""
            }
        },
        bulbDiff:{
            top:{
                alertType:0,
                message: ""
            },
            bottom:{
                alertType:0,
                message:""
            }
            
        }
    };
    var troughSettings = settingsArr.filter(setting => setting.trough === trough)[0];
    console.log("bulbdiff :", data.data.bulbDiff.top );

    

    if(data.data.temperature.top > troughSettings.criticalTemp){
        console.log("Temperature top alert");
        alerts.temperature.top.alertType =1;
        console.log("alertTYpe", alerts.temperature.top.alertType =1);
        alerts.temperature.top.message = "Alert: Temperature higher than "+troughSettings.criticalTemp+" degrees";
    }

    if(data.data.temperature.bottom > troughSettings.criticalTemp){
        console.log("Temperature bottom alert");
        alerts.temperature.bottom.alertType =1;
        alerts.temperature.bottom.message = "Alert: Temperature higher than "+troughSettings.criticalTemp+" degrees";
    }
    console.log("cricial bd", troughSettings.criticalBubdiffHigh);
    if(data.data.bulbDiff.top > 7){
        console.log("bulbdiff top alert");
        alerts.bulbDiff.top.alertType=1;
        alerts.bulbDiff.top.message = "Alert! Bulb difference higher than 7";
       // data.findAll();
    }else if(data.data.bulbDiff.top<3){
        alerts.bulbDiff.top.alertType=1;
        alerts.bulbDiff.top.message = "Alert! Bulb ddifference lower than 3";
    }

    if(data.data.bulbDiff.bottom > 7){
        console.log("bulbdiff top alert");
        alerts.bulbDiff.bottom.alertType=1;
        alerts.bulbDiff.bottom.message = "Alert! Bulb difference higher than 7";
       // data.findAll();
    }else if(data.data.bulbDiff.bottom <3){
        alerts.bulbDiff.bottom.alertType=1;
        alerts.bulbDiff.bottom.message = "Alert! Bulb difference lower than 3";
    }

    

    return alerts;
    
}

module.exports = { handleAlerts }