import {
  useEffect,
  useState
} from 'react';

import Web3 from 'web3';
import Web3Modal from 'web3modal';

import Authereum from 'authereum';
// REPLACE_IMPORTS
import ConnectButton from '../ConnectButton';
// REPLACE_IMPORTS
const web3Modal = new Web3Modal({
  network: 'mainnet', // optional
  cacheProvider: true, // optional
  providerOptions: {
    authereum: {
      package: Authereum // required
    }
  }
});

const App = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connect();
    }
  }, []);

  const connect = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const [account] = await web3.eth.getAccounts();
    setAddress(account);

    // todo: handle events ?
    // provider.on('accountsChanged', async () => {
    //   console.log('accounts changed event');
    //   await disconnect();
    //   provider.off('accountsChanged');
    // });
    // provider.on('chainChanged', disconnect);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    setAddress('');
  };

  return (
    // REPLACE_BUTTON
    <ConnectButton
      address={address}
      isConnected={!!address}
      connect={connect}
      disconnect={disconnect}
    />
    // REPLACE_BUTTON
  );
};

export default App;
