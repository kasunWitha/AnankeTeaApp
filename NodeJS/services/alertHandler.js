const settingController = require('../controllers/settingController');

var settingsArr;
settingController.findAll((docs)=>{
    settingsArr=docs;
});

var lastLowtimes = {
    trough1:{
        start:{
            temp:{
                top: Date.now(),
                bottom: Date.now()
            },
            hum: {
                top: Date.now(),
                bottom: Date.now()
            }
        },

        middle:{
            temp:{
                top: Date.now(),
                bottom: Date.now()
            },
            hum: {
                top: Date.now(),
                bottom: Date.now()
            }
        }
    }
}



const handleAlerts = (trough, position, data)=>{

    var alerts = {
        temperature:{
            top:{
                alertType:0,
                message: "Top: No Alerts."
            },
            bottom:{
                alertType:0,
                message:"Bottom: No Alerts"
            }
        },
        bulbDiff:{
            top:{
                alertType:0,
                message: "Top: No Alerts"
            },
            bottom:{
                alertType:0,
                message:"Bottom: No Alerts"
            }
            
        }
    };
    var troughSettings = settingsArr.filter(setting => setting.trough === trough)[0];
    console.log("bulbdiff :", data.data.bulbDiff.top );

    

    if(data.data.temperature.top > troughSettings.criticalTemp){
        console.log("Temperature top alert");
        alerts.temperature.top.alertType =1;
        console.log("alertTYpe", alerts.temperature.top.alertType =1);
        alerts.temperature.top.message = "Alert: Temperature of top higher than "+troughSettings.criticalTemp+" degrees";
    }

    if(data.data.temperature.bottom > troughSettings.criticalTemp){
        console.log("Temperature bottom alert");
        alerts.temperature.bottom.alertType =1;
        alerts.temperature.bottom.message = "Alert: Temperature of bottom higher than "+troughSettings.criticalTemp+" degrees";
    }
    console.log("cricial bd", troughSettings.criticalBubdiffHigh);
    if(data.data.bulbDiff.top > 7){
        console.log("bulbdiff top alert");
        alerts.bulbDiff.top.alertType=1;
        alerts.bulbDiff.top.message = "Alert! Bulb difference of top higher than 7";
       // data.findAll();
    }else if(data.data.bulbDiff.top<3){
        alerts.bulbDiff.top.alertType=1;
        alerts.bulbDiff.top.message = "Alert! Bulb difference of bottom lower than 3";
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


    if(position === "start"){
        console.log("In warning msg ctrl")
        if(data.data.temperature.top <= troughSettings.criticalTemp){
            lastLowtimes.trough1.start.temp.top = Date.now();
            console.log("low temp",  lastLowtimes.trough1.start.temp.top )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.start.temp.top)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.temperature.top.alertType =2;
                alerts.temperature.top.message = "Warning! Temperature of top has been above " + troughSettings.criticalTemp+" for more than 1 minute"
            }
        }

        if(data.data.temperature.bottom <= troughSettings.criticalTemp){
            lastLowtimes.trough1.start.temp.bottom = Date.now();
            console.log("low temp",  lastLowtimes.trough1.start.temp.bottom )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.start.temp.bottom)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.temperature.bottom.alertType =2;
                alerts.temperature.bottom.message = "Warning! Temperature of bottom has been above " + troughSettings.criticalTemp+" for more than 1 minute"
            }
        }

        if(data.data.bulbDiff.top <= 7 && data.data.bulbDiff.top>=2){
            lastLowtimes.trough1.start.hum.top = Date.now();
            console.log("low temp",  lastLowtimes.trough1.start.hum.top )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.start.hum.top)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.bulbDiff.top.alertType =2;
                if(data.data.bulbDiff.top > 7){
                    alerts.bulbDiff.top.message = "Warning! Bulb difference of top has been above " + 7+" for more than 1 minute";
                }else{
                    alerts.bulbDiff.top.message = "Warning! Bulb difference of top has been below " + 2+" for more than 1 minute";
                }
            }

        }

        if(data.data.bulbDiff.bottom <= 7 && data.data.bulbDiff.bottom>=2){
            lastLowtimes.trough1.start.hum.bottom = Date.now();
            console.log("low temp",  lastLowtimes.trough1.start.hum.bottom )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.start.hum.bottom)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.bulbDiff.bottom.alertType =2;
                if(data.data.bulbDiff.bottom > 7){
                    alerts.bulbDiff.bottom.message = "Warning! Bulb difference of bottom has been above " + 7+" for more than 1 minute";
                }else{
                    alerts.bulbDiff.bottom.message = "Warning! Bulb difference of bottom has been below " + 2+" for more than 1 minute";
                }
            }

        }


    }else if(position === "middle"){
        console.log("In warning msg ctrl")
        if(data.data.temperature.top <= troughSettings.criticalTemp){
            lastLowtimes.trough1.middle.temp.top = Date.now();
            console.log("low temp",  lastLowtimes.trough1.middle.temp.top )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.middle.temp.top)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.temperature.top.alertType =2;
                alerts.temperature.top.message = "Warning! Temperature of top has been above " + troughSettings.criticalTemp+" for more than 1 minute"
            }
        }

        if(data.data.temperature.bottom <= troughSettings.criticalTemp){
            lastLowtimes.trough1.middle.temp.bottom = Date.now();
            console.log("low temp",  lastLowtimes.trough1.middle.temp.bottom )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.middle.temp.bottom)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.temperature.bottom.alertType =2;
                alerts.temperature.bottom.message = "Warning! Temperature of bottom has been above " + troughSettings.criticalTemp+" for more than 1 minute"
            }
        }

        if(data.data.bulbDiff.top <= 7 && data.data.bulbDiff.top>=2){
            lastLowtimes.trough1.middle.hum.top = Date.now();
            console.log("low temp",  lastLowtimes.trough1.middle.hum.top )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.middle.hum.top)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.bulbDiff.top.alertType =2;
                if(data.data.bulbDiff.top > 7){
                    alerts.bulbDiff.top.message = "Warning! Bulb difference of top has been above " + 7+" for more than 1 minute";
                }else{
                    alerts.bulbDiff.top.message = "Warning! Bulb difference of top has been below " + 2+" for more than 1 minute";
                }
            }

        }

        if(data.data.bulbDiff.bottom <= 7 && data.data.bulbDiff.bottom>=2){
            lastLowtimes.trough1.middle.hum.bottom = Date.now();
            console.log("low temp",  lastLowtimes.trough1.middle.hum.bottom )
        }else{
            var elapsedTime = (Date.now()-lastLowtimes.trough1.middle.hum.bottom)/60000;
            console.log("ElapsedTime", elapsedTime);

            if( elapsedTime>1){
                console.log()
                alerts.bulbDiff.bottom.alertType =2;
                if(data.data.bulbDiff.bottom > 7){
                    alerts.bulbDiff.top.message = "Warning! Bulb difference of bottom has been above " + 7+" for more than 1 minute";
                }else{
                    alerts.bulbDiff.top.message = "Warning! Bulb difference of bottom has been below " + 2+" for more than 1 minute";
                }
            }

        }

    }


    

    return alerts;
    
}

module.exports = { handleAlerts }