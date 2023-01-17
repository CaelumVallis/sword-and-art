const ws = require('ws');

const wss = new ws.Server({
    port: 4000
}, () => {console.log('Server started on 4000')})

const store = {
    data: {},
    newPlayerName: ''
}

wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)

        switch(msg.event) {
            case 'STORE_UPDATE':
                store.data = msg.data
                broadCastMessage(store)
                break;
            case 'CONNECTION':
                store.newPlayerName = msg.newPlayerName
                console.log(store)
                broadCastMessage(store)
                break;
        }
    })
}) 

const broadCastMessage = (data) => {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(data))
    })
}