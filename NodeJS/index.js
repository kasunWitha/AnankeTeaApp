const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
const wsClient = require('./websocket/wsClient');

var routes = require('./routes.js');

var app = express();

app.use(bodyParser.json());

app.listen(3000, ()=> console.log("Server started at port 3000."));

app.use('/data', routes)
