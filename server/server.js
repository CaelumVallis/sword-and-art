const ws = require('ws');

const wss = new ws.Server({
    port: 4000
}, () => {console.log('Server started on 4000')})

const store = {
    data: []
}

wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)

        switch(msg.event) {
            case 'message':
                store.data.push(msg)
                broadCastMessage(store.data)
                break;
            case 'connection':
                store.data.push(msg)
                broadCastMessage(store.data)
                break;
        }
    })
}) 

const broadCastMessage = (data) => {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(data))
    })
}