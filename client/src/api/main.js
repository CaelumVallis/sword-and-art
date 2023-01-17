import { useState, useRef } from "react"

export const useWebSocket = () => {
    const socket = useRef() 
    const [connected, setConnected] = useState(false)
    const [data, setData] = useState([])


    const connectWS = () => {
        socket.current = new WebSocket('ws://localhost:4000') 

        socket.current.onopen = () => {
            setConnected(true)
        
            const message = {
                event: 'connection',
                message: 'NEW_CONECTION',
                id: Date.now()
            }
    
            socket.current.send(JSON.stringify(message))
        }
    
        socket.current.onmessage = ({ data }) => {
            setData(JSON.parse(data))
        }
    
        socket.current.onclose = () => {
            console.log('Socket закрыт')
        }
    
        socket.current.onerror = () => {
            console.log('КАКОГО-ТО ХУЯ НИХУЯ НЕ ФУРЫЧИТ')
        }
    }
    
    const sendWS = (value) => {
        const message = {
            event: 'message',
            message: value,
            id: Date.now()
        }
    
        socket.current.send(JSON.stringify(message))
    }

    return { connectWS, sendWS, statusWS: connected, dataWS: data };
}