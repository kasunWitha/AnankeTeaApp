const express = require('express');
var router = express.Router();

var troughController = require('./controllers/troughController.js');
var deviceController = require('./controllers/deviceController');
var settingController = require('./controllers/settingController');

router.get('/', (req, res)=>{
    troughController.getAll((result)=>{
        res.send(result);
    });
    
});

router.post('/newtrough', (req, res)=>{
    troughController.createNewTrough( req.body.trough, (newTrough)=>{
        deviceController.createNewDevice(req.body.device, newTrough._id.toString(), req.body.position, (result)=>{
            res.send(result);
        });
    });
});

router.post('/finddevice',(req, res)=>{
    deviceController.findByName(req.body.name, (result)=>{
        res.send(result.trough.name);
    });
});


router.post('/newdata', (req, res)=>{
    troughController.addData(req.body.trough, req.body.date, req.body.hour,"start",req.body.data, (result)=>{
        res.send(result);
    });
});

router.post('/newsetting', (req, res)=>{
    settingController.createNewSetting(req.body.trough, 50, 1, 7,3,1, (doc)=>{
        res.send(doc);
    });
});


module.exports = router;