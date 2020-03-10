const WebSocket = require('ws');

const url = 'ws://138.197.92.157:2222';

const messageParser = require('../services/messageParser');

const connection = new WebSocket(url);

connection.onopen = ()=>{
    console.log("websocket connected.");
}

connection.onmessage = (msg)=>{
    messageParser.parseDeviceMessage(msg.data);
}