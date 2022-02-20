import {
  ConnectWallet,
  ThirdwebProvider
} from '@3rdweb/react';
import { useWeb3 } from '@3rdweb/hooks';
import { Box } from '@chakra-ui/react';
// REPLACE_IMPORTS
import ConnectButton from '../ConnectButton';
// REPLACE_IMPORTS
const supportedChainIds = [1];
const connectors = {
  injected: {}
};

const App = () => {
  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <Box display="flex" alignItems="center" justifyContent={'center'}>
        <Box marginX={1}><ThirdWebConnect/></Box>
        <Box marginX={1}><CustomConnect/></Box>
      </Box>
    </ThirdwebProvider>
  );
};

const ThirdWebConnect = () => {
  return <ConnectWallet disableNetworkSwitching/>;
};

const CustomConnect = () => {
  const { address, connectWallet, disconnectWallet } = useWeb3();

  return (
    <>
      <ConnectButton
        address={address!}
        isConnected={!!address}
        connect={() => connectWallet('injected')}
        disconnect={disconnectWallet}
      />
    </>
  );
};

export default App;