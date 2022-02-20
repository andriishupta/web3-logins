import {
  MoralisProvider,
  useMoralis
} from 'react-moralis';
// REPLACE_IMPORTS
import ConnectButton from '../ConnectButton';
const yourAppId = process.env.NEXT_PUBLIC_MORALIS_APP_ID!;
const yourServerUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL!;
// REPLACE_IMPORTS

const App = () => {
  return (
    <MoralisProvider appId={yourAppId} serverUrl={yourServerUrl}>
      <Moralis/>
    </MoralisProvider>
  );
};

const Moralis = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const address = user?.attributes.ethAddress;

  return (
    // REPLACE_BUTTON
    <ConnectButton
      address={address!}
      isConnected={isAuthenticated}
      connect={authenticate}
      disconnect={logout}
    />
    // REPLACE_BUTTON
  );
};

export default App;
