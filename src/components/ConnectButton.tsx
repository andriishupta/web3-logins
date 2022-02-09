import {
  Button,
  Stack
} from '@chakra-ui/react';
import { useLogin } from '../core';

const ConnectButton = () => {
  const {currentLogin, isConnected, disconnect, connect} = useLogin();
  const loginStateColoring = isConnected ? 'red' : 'green';

  return <>
    <Stack
      direction={'column'}
      spacing={3}
      align={'center'}
      alignSelf={'center'}
      position={'relative'}>
      <Button
        onClick={() => isConnected ? disconnect() : connect()}
        colorScheme={loginStateColoring}
        bg={`${loginStateColoring}.400`}
        rounded={'full'}
        px={6}
        _hover={{
          bg: `${loginStateColoring}.500`,
        }}>
        {isConnected ? 'Disconnect' : `Connect with ${currentLogin} + logo`}
      </Button>
    </Stack>
  </>
}

export default ConnectButton
