import {
  MoralisProvider,
  useMoralis
} from 'react-moralis';
import ConnectButton from '../ConnectButton';

const NEXT_PUBLIC_MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID!;
const NEXT_PUBLIC_MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL!;

const App = () => {
  return (
    <MoralisProvider appId={NEXT_PUBLIC_MORALIS_APP_ID} serverUrl={NEXT_PUBLIC_MORALIS_SERVER_URL}>
      <Moralis/>
    </MoralisProvider>
  );
};

const Moralis = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const address = user?.getUsername();

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
