import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useWebSocket } from './api/main';
import { ScienceScreen } from './components/ScienceScreen/ScienceScreen';
import { CommonScreen } from './components/CommonScreen/CommonScreen';
import { DetailedScreen } from './components/DetailedScreen/DetailedScreen';

const App = () => {
  const [newPlayerName, setNewPlayerName] = useState('');

  const { connectWS, sendWS, statusWS, dataWS } = useWebSocket();

  const state = useSelector((state) => state);

  const endTurn = () => {
    sendWS(state);
  };

  const connectNewPlayer = () => {
    connectWS(newPlayerName);
  };

  return (
    <>
      <div>
        <DetailedScreen/>
      </div>
      <div>
        <button onClick={connectNewPlayer}>Connect</button>
        Please, enter your name:
        <input value={newPlayerName} onChange={(e) => setNewPlayerName(e.target.value)} />
        <button onClick={endTurn}>Send</button>
      </div>
    </>
  );
};

export default App;
