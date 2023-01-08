import React, { useEffect, useRef, useState } from 'react'
import { useWebSocket } from './api/main'
import { ScienceScreen } from './components/ScienceScreen/ScienceScreen'

const App = () => {
  const [value, setValue] = useState('nichego')

  const { connectWS, sendWS, statusWS, dataWS } = useWebSocket();

  return (
    // <div><ScienceScreen/></div>
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={connectWS}>Connect</button>
      <button onClick={() => sendWS(value)}>Send</button>
      {dataWS.map((el, i) => <p key={i}>{el.message}</p>)}
    </div>
  )
}

export default App