const WebSocket = require('ws');

const url = 'ws://15.206.145.171:3000';

const connection = new WebSocket(url);

connection.onopen=()=>{
    console.log("COnnection 2 opened");
}

const sendMessage = (message)=>{
    connection.send(message);
}

module.exports = {sendMessage}
