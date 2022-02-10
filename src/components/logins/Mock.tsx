import { useState } from 'react';
// REPLACE_IMPORTS
import ConnectButton from '../ConnectButton';
import { LoginType } from '../../core';
const currentLoginType = LoginType.Mock;
// REPLACE_IMPORTS

const Mock = () => {
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
      type={currentLoginType}
      isConnected={isConnected}
      connect={connect}
      disconnect={disconnect}
    />
    // REPLACE_BUTTON
  );
};

export default Mock;
