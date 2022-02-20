import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import {
  Box,
  Container,
  Spinner,
  Stack,
} from '@chakra-ui/react';

import {
  LoginType,
  useLogin
} from '../src/core';

import Heading from '../src/components/Heading';
import LoginPicker from '../src/components/LoginPicker';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
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
      <Header/>
      <Container maxW={'3xl'} centerContent>
        <Stack
          textAlign={'center'}
          spacing={{ base: 5, md: 5 }}
          paddingTop={{ base: 5, md: 5 }}
          paddingBottom={0}
          position={'relative'}
        >
          <LoginPicker/>
          <Heading/>
          {loginType &&
            <>
              <LoginComponent/>
              <Code/>
            </>
          }
        </Stack>
        {!loginType &&
            <Image src="/placeholder.png" alt="coding meme" width={640} height={363}/>
        }
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
