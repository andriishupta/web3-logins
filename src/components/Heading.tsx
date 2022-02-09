import {
  Heading as CHeading,
  Select,
  Text
} from '@chakra-ui/react';
import { useLogin } from '../core';
import LoginPicker from './LoginPicker';

const Heading = () => {
  const { currentLogin } = useLogin();
  return <>
    <Text color={'gray.500'}>
      Select what kind of login you want to use and see what it takes to implement it
    </Text>
    <CHeading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      lineHeight={'110%'}>
      Web3 Login<br/>
      <Text as={'span'} color={'green.400'}>
        { currentLogin }
      </Text>
    </CHeading>
  </>
}

export default Heading;
