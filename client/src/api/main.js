import { useState, useRef } from "react"

export const useWebSocket = () => {
    const socket = useRef() 
    const [connected, setConnected] = useState(false)
    const [dataFromServer, setDataFromServer] = useState({})

    const connectWS = (newPlayerName) => {
        socket.current = new WebSocket('ws://localhost:4000') 

        socket.current.onopen = () => {
            setConnected(true)
        
            const message = {
                event: 'CONNECTION',
                newPlayerName,
                id: Date.now()
            }
    
            socket.current.send(JSON.stringify(message))
        }
    
        socket.current.onmessage = ({ data }) => {
            setDataFromServer(JSON.parse(data))
        }
    
        socket.current.onclose = () => {
            console.log('Socket закрыт')
        }
    
        socket.current.onerror = () => {
            console.log('КАКОГО-ТО ХУЯ НИХУЯ НЕ ФУРЫЧИТ')
        }
    }
    
    const sendWS = (data) => {
        const message = {
            event: 'STORE_UPDATE',
            data,
            id: Date.now()
        }
    
        socket.current.send(JSON.stringify(message))
    }

    return { connectWS, sendWS, statusWS: connected, dataWS: dataFromServer };
}