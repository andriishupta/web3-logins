import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import {
  Box,
  Container,
  Flex,
  Link,
  Spacer,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react';

import {
  LoginType,
  useLogin
} from '../src/core';

import GithubIcon from '../public/icons/github.png';
import TwitterIcon from '../public/icons/twitter.png';
import HashnodeIcon from '../public/icons/hashnode.png';
import MediumIcon from '../public/icons/medium.png';

import Heading from '../src/components/Heading';
import LoginPicker from '../src/components/LoginPicker';
import LinkIcon from '../src/components/LinkIcon';
import Mock from '../src/components/logins/Mock';

const loading = () => <Box display={'flex'} alignItems={'center'} justifyContent={'center'}><Spinner size="xl"/></Box>;
const Code = dynamic(() => import('../src/components/Code'), { ssr: false, loading });

const Web3js = dynamic(() => import('../src/components/logins/Web3js'), { ssr: false, loading });
const Web3Modal = dynamic(() => import('../src/components/logins/Web3Modal'), { ssr: false, loading });
const ThirdWeb = dynamic(() => import('../src/components/logins/ThirdWeb'), { ssr: false, loading });
const Moralis = dynamic(() => import('../src/components/logins/Moralis'), { ssr: false, loading });

const LoginComponents = {
  [ LoginType.Mock ]: Mock,
  [ LoginType.Web3js ]: Web3js,
  [ LoginType.Web3Modal ]: Web3Modal,
  [ LoginType.ThirdWeb ]: ThirdWeb,
  [ LoginType.Moralis ]: Moralis,
};

const Home: NextPage = () => {
  const { loginType } = useLogin();
  const LoginComponent = LoginComponents[ loginType! ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Web3 Logins Showcase {loginType ? `| ${loginType}` : ''} </title>
      </Head>
      <header>
        <Flex
          height={'48px'}
          boxShadow={'0px 2px 6px 0px rgba(160,174,192,0.75)'}
          px={2}
        >
          <Flex alignItems={'center'}>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://link to hashnode article'}
                src={HashnodeIcon}
                alt={'twitter share'}
              />
            </Flex>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://link to medium article'}
                src={MediumIcon}
                alt={'github repository'}
              />
            </Flex>
          </Flex>
          <Spacer/>
          <Flex alignItems={'center'}>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://twitter.com/share?text=Check out "Web3 Logins Showcase" by @andriishupta&url=https://web3-logins.vercel.app&hashtags=web3'}
                src={TwitterIcon}
                alt={'twitter share'}
              />
            </Flex>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://github.com/andriishupta/web3-logins'}
                src={GithubIcon}
                alt={'github repository'}
              />
            </Flex>
          </Flex>
        </Flex>
      </header>
      <Container position={'relative'} maxW={'3xl'} display={'flex'} flexDirection={'column'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}
          position={'relative'}
        >
          <LoginPicker/>
          <Heading/>
          {loginType
            ? <>
              <LoginComponent/>
              <Code/>
            </>
            : <Box py={{ base: 10, md: 10 }}><Image src="/placeholder.png" alt="coding meme" width={640} height={363}/></Box>
          }
        </Stack>
      </Container>
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
              <Link href={'https://nextjs.org/'} marginX={1}>
                <Text color={'gray.700'}>Next.js</Text>
              </Link>
              &
              <Link href={'https://chakra-ui.com/'} marginX={1}>
                <Text color={'gray.700'}>Chakra-UI</Text>
              </Link>
            </Text>
          </Flex>
          <Spacer/>
          <Flex alignItems={'center'}>
            <Text color={'gray.500'}>
              with 🖤 by&nbsp;
              <Link href={'https://twitter.com/andriishupta'}>
                <Text display={'inline'} color={'#00ACEE'}>@andriishupta</Text>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </footer>
    </>

  );
};

export default Home;
