import {
  Heading as CHeading,
  Text
} from '@chakra-ui/react';
import {
  AvailableLoginTypesMap,
  LoginType,
  useLogin
} from '../core';

const SimpleDescriptions = {
  [ LoginType.Mock ]: 'Mock description',
  [ LoginType.Web3js ]: 'Web3js description',
  [ LoginType.Web3Modal ]: 'Web3Modal description',
  [ LoginType.ThirdWeb ]: 'ThirdWeb description',
  [ LoginType.Moralis ]: 'Moralis description',
};

const Heading = () => {
  const { loginType } = useLogin();
  const color = AvailableLoginTypesMap[ loginType! ]?.color ?? 'green';
  const simpleDescription = SimpleDescriptions[ loginType! ];

  return <>
    <Text color={'gray.500'}>
      {loginType
        ? simpleDescription
        : <>
          Select what kind of login you want to use and check what it takes to implement it 🤓
          <br/>
          The code you will see is actual implementation taken from the codebase 🤯
        </>
      }
    </Text>
    <CHeading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      lineHeight={'110%'}
    >
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
