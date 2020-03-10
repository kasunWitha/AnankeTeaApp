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
    console.log("toptemp :", data.data.temperature.top );
    

    if(data.data.temperature.top > troughSettings.criticalTemp){
        console.log("Temperature top alert");
        alerts.temperature.top.alertType =1;
        alerts.temperature.top.message = "Temperature of top higher than "+troughSettings.criticalTemp+" degrees";
    }

    if(data.data.temperature.bottom > troughSettings.criticalTemp){
        console.log("Temperature bottom alert");
        alerts.temperature.bottom.alertType =1;
        alerts.temperature.bottom.message = "Temperature of top higher than "+troughSettings.criticalTemp+" degrees";
    }
    if(data.data.temperature.bottom > troughSettings.criticalTemp){
       // data.findAll();
    }

    return alerts;
    
}

module.exports = { handleAlerts }