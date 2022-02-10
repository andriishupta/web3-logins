import {
  Box,
  Button
} from '@chakra-ui/react';

import {
  AvailableLoginTypes,
  useLogin
} from '../core';

const LoginPicker = () => {
  const { setLoginType } = useLogin();
  return <Box>
    {AvailableLoginTypes.map(({ type, color }) =>
      <Button
        size={'lg'}
        margin={2}
        key={type}
        rounded={'full'}
        cursor={'pointer'}
        colorScheme={color}
        bg={`${color}.400`}
        _hover={{
          bg: `${color}.500`,
        }}
        onClick={() => setLoginType(type)}
      >
        {type}
      </Button>
    )}
  </Box>;
};

export default LoginPicker;
