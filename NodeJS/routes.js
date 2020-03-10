const express = require('express');
var router = express.Router();

var dataController = require('./controllers/dataController.js');

router.get('/', (req, res)=>{
    dataController.getAll((result)=>{
        res.send(result);
    });
    
});

router.post('/newtrough', (req, res)=>{
    dataController.createNewTrough(req.body.name, (result) =>{
        res.send(result);
    });
    
});

router.post('/newdate', (req, res)=>{
    dataController.createNewDate(req.body.trough, req.body.date, (result)=>{
        res.send(result);
    });
});

router.post('/newhour', (req, res)=>{
    dataController.createNewHour(req.body.trough, req.body.date, req.body.hour, (result)=>{
        res.send(result);
    });
});

module.exports = router;