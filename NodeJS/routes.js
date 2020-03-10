const express = require('express');
var router = express.Router();

var troughController = require('./controllers/troughController.js');

router.get('/', (req, res)=>{
    troughController.getAll((result)=>{
        res.send(result);
    });
    
});


router.post('/newdata', (req, res)=>{
    troughController.addData(req.body.trough, req.body.date, req.body.hour,"start",req.body.data, (result)=>{
        res.send(result);
    });
});

module.exports = router;