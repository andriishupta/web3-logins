import {
  MoralisProvider,
  useMoralis
} from 'react-moralis';
import ConnectButton from '../ConnectButton';

const yourAppId = process.env.NEXT_PUBLIC_MORALIS_APP_ID!;
const yourServerUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL!;

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
    <>
      <ConnectButton
        address={address!}
        isConnected={isAuthenticated}
        connect={authenticate}
        disconnect={logout}
      />
    </>
  );
};

export default App;
