//const WebSocket = require('ws');

// const url = 'ws://138.197.92.157:2222';

// const messageParser = require('../services/messageParser');

// const connection = new WebSocket(url);

// connection.onopen = ()=>{
//     console.log("websocket connected.");
// }

// connection.onmessage = (msg)=>{
//     messageParser.parseDeviceMessage(msg.data);
// }

var mqtt = require('mqtt');

var options = {
    clientId:'123',
    username: '123',
    password: '123'
};


client  = mqtt.connect('mqtt://138.197.92.157:1883',options);

client.on('connect', function () {
    console.log('mqtt connected ... ');
    client.subscribe('a0315543/g8934028/d5298846/PUB');
    client.subscribe('a0315543/g8934028/d5298847/PUB');
});


client.on('message', function (topic,message) {
                    
    console.log(message.toString());
});