import {
  Heading as CHeading,
  Text
} from '@chakra-ui/react';
import {
  AvailableLoginTypesMap,
  useLogin
} from '../core';

const Heading = () => {
  const { loginType } = useLogin();
  const color = AvailableLoginTypesMap[ loginType! ]?.color ?? 'green';

  return <>
    <Text color={'gray.500'}>
      {loginType
        ? 'The code you will see is actual implementation taken from the codebase 🤯'
        : 'Select what kind of login you want to use and check what it takes to implement it 🤓'
      }
    </Text>
    <CHeading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      lineHeight={'110%'}
    >
      Web3 Login
      <br/>
      {loginType && <>
        ✨&nbsp;
        <Text as={'span'} color={`${color}.400`}>
          {loginType}
        </Text>
        &nbsp;✨
      </>
      }
    </CHeading>
  </>;
};

export default Heading;
