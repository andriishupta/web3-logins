import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Box,
  Container,
  Stack,
} from '@chakra-ui/react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import {
  LoginType,
  useLogin
} from '../src/core';

import Heading from '../src/components/Heading';
import LoginPicker from '../src/components/LoginPicker';

const Code = dynamic(() => import('../src/components/Code'), { ssr: false });
const Web3js = dynamic(() => import('../src/components/logins/Web3js'), { ssr: false });
const Web3Modal = dynamic(() => import('../src/components/logins/Web3Modal'), { ssr: false });
const ThirdWeb = dynamic(() => import('../src/components/logins/ThirdWeb'), { ssr: false });

import Moralis from '../src/components/logins/Moralis';
import Mock from '../src/components/logins/Mock';

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
              ...Description...
            </>
            : <Box py={{ base: 10, md: 10 }}><Image src="/placeholder.png" alt="coding meme" width={640} height={363}/></Box>
          }
        </Stack>
      </Container>
    </>

  );
};

export default Home;
