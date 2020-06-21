const ws = require('../websocket/wsClient2');

const broadcastMsg=(trough, position, data, alerts)=>{

    var message = {
        trough: trough,
        position:position,
        data: data,
        alerts: alerts
    }

    console.log("bROADCAST MAS", message)

    ws.sendMessage(JSON.stringify(message));

}

module.exports = { broadcastMsg };