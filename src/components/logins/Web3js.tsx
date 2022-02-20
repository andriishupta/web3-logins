import {
  useEffect,
  useState
} from 'react';
import Web3 from 'web3';
// REPLACE_IMPORTS
import ConnectButton from '../ConnectButton';
// REPLACE_IMPORTS
const Web3jsCacheKey = 'web3js_cache_key';

const App = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (isProviderCached()) {
      connect();
    }
  }, []);

  const connect = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(window.ethereum);
    const [account] = await web3.eth.getAccounts();
    setAddress(account);
    toggleCachedProvider(true);
  };

  const disconnect = () => {
    setAddress('');
    toggleCachedProvider(false);
  };

  const isProviderCached = () => {
    return sessionStorage.getItem(Web3jsCacheKey) === 'true';
  };

  const toggleCachedProvider = (status: boolean) => {
    sessionStorage.setItem(Web3jsCacheKey, JSON.stringify(status));
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
