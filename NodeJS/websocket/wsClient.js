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

const messageParser = require('../services/messageParser');

var options = {
    clientId:'123',
    username: '123',
    password: '123'
};


client  = mqtt.connect('mqtt://138.197.92.157:1883',options);

client.on('connect', function () {
    console.log('mqtt connected ... ');
     client.subscribe('a6140451/g9440826/d3605069/PUB');
     client.subscribe('a6140451/g9440826/d1310166/PUB');
     client.subscribe('a6140451/g9440826/d0003745/PUB');
     client.subscribe('a6140451/g9440826/d6992123/PUB');
});


client.on('message', function (topic,message) {

    //console.log(topic)
    
    if(topic === 'a6140451/g9440826/d3605069/PUB'){
        console.log('device1', message.toString());
        messageParser.parseDeviceMessage1(message.toString());
    }else if(topic === 'a6140451/g9440826/d1310166/PUB'){
        console.log('device2', message.toString());
        messageParser.parseDeviceMessage2(message.toString());
    }else if(topic === 'a6140451/g9440826/d0003745/PUB'){
        console.log('device3', message.toString());
        messageParser.parseDeviceMessage3(message.toString());
    }else if(topic === 'a6140451/g9440826/loc/PUB'){
        console.log('device4', message.toString());
        messageParser.parseDeviceMessage4(message.toString());
    }
    
});