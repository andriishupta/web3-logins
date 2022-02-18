import { useState } from 'react';
// REPLACE_IMPORTS
import ConnectButton from '../ConnectButton';
import { LoginType } from '../../core';
// REPLACE_IMPORTS

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  const connect = () => {
    alert('hooray! this is mocked login and you are "connected"');
    setIsConnected(true);
  }

  const disconnect = () => {
    alert('bye! you are disconnected!');
    setIsConnected(false);
  }

  return (
    // REPLACE_BUTTON
    <ConnectButton
      address="0x0"
      isConnected={isConnected}
      connect={connect}
      disconnect={disconnect}
    />
    // REPLACE_BUTTON
  );
};

export default App;
