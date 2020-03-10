const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const WebSocket = require('ws');

const { mongoose } = require('./db.js');
const wsClient = require('./websocket/wsClient');

var routes = require('./routes.js');

var app = express();

app.use(bodyParser.json());

//app.listen(3000, ()=> console.log("Server started at port 3000."));

app.use('/data', routes);

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    

        //log the received message and send it back to the client
        ws.on('message', function incoming(data) {
            wss.clients.forEach(function each(client) {
              if (client.readyState === WebSocket.OPEN) {
                client.send(data);
              }
            });
        });

    //send immediatly a feedback to the incoming connection    
    ws.send(JSON.stringify({author:"dddd", message: "ccdccxd"}));
});

server.listen(3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

