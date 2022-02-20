import {
  Flex,
  Link,
  Spacer,
  Text
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <footer style={{ display: 'flex', position: 'absolute', bottom: 0, width: '100%' }}>
        <Flex
          width={'100%'}
          height={'48px'}
          boxShadow={'0px -2px 6px 0px rgba(160,174,192,0.75)'}
          px={2}
        >
          <Flex alignItems={'center'}>
            <Text display={'flex'} color={'gray.500'}>
              Created with
              <Link href={'https://nextjs.org/'} target={'_blank'} rel="noreferrer" marginX={1}>
                <Text color={'gray.700'}>Next.js</Text>
              </Link>
              &
              <Link href={'https://chakra-ui.com/'} target={'_blank'} rel="noreferrer" marginX={1}>
                <Text color={'gray.700'}>Chakra-UI</Text>
              </Link>
            </Text>
          </Flex>
          <Spacer/>
          <Flex alignItems={'center'}>
            <Text display={'flex'} color={'gray.500'}>
              with 🖤 by&nbsp;
              <Link href={'https://twitter.com/andriishupta'} target={'_blank'} rel="noreferrer">
                <Text display={'inline'} color={'#00ACEE'}>@andriishupta</Text>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </footer>
    </>
  );
};

export default Footer;
