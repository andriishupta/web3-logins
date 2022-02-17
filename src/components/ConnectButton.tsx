import { FC } from 'react';
import {
  Button,
  Stack,
  Text
} from '@chakra-ui/react';
import {
  useLogin
} from '../core';

type ConnectButtonParams = {
  address: string;
  isConnected: boolean,
  connect: Function,
  disconnect: Function
};

const ConnectButton: FC<ConnectButtonParams> = ({ address, isConnected, connect, disconnect }) => {
  const { loginType } = useLogin();

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
        {isConnected ? 'Disconnect' : `Connect with ${loginType} + logo`}
      </Button>
      { isConnected && <Text>{ address }</Text> }
    </Stack>
  </>;
};

export default ConnectButton;
