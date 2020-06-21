const WebSocket = require('ws');

const url = 'ws://localhost:3000';

const connection = new WebSocket(url);

connection.onopen=()=>{
    console.log("COnnection 2 opened");
}

const sendMessage = (message)=>{
    connection.send(message);
}
//sends message

module.exports = {sendMessage}
