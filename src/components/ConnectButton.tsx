import { FC } from 'react';
import {
  Button,
  Stack
} from '@chakra-ui/react';
import {
  LoginType
} from '../core';

type ConnectButtonParams = {
  type: LoginType,
  isConnected: boolean,
  connect: Function,
  disconnect: Function
};

const ConnectButton: FC<ConnectButtonParams> = ({ type, isConnected, connect, disconnect }) => {
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
        {isConnected ? 'Disconnect' : `Connect with ${type} + logo`}
      </Button>
    </Stack>
  </>;
};

export default ConnectButton;
