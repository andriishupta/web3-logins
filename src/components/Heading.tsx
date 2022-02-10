import {
  Heading as CHeading,
  Select,
  Text
} from '@chakra-ui/react';
import {
  AvailableLoginTypesMap,
  useLogin
} from '../core';

const Heading = () => {
  const { type } = useLogin();
  const color = AvailableLoginTypesMap[type]?.color ?? 'green';

  return <>
    <Text color={'gray.500'}>
      Select what kind of login you want to use and check what it takes to implement it 🤓
      <br/>
      The code you will see is actual implementation taken from the codebase 🤯
    </Text>
    <CHeading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      lineHeight={'110%'}>
      Web3 Login<br/>
      ✨&nbsp;
      <Text as={'span'} color={`${color}.400`}>
        { type }
      </Text>
      &nbsp;✨
    </CHeading>
  </>
}

export default Heading;
