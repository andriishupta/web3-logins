import type { NextPage } from 'next';
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

const DynamicCodeComponent = dynamic(
  () => import('../src/components/Code'),
  { ssr: false }
);

import Plain from '../src/components/logins/Plain';
import Web3Modal from '../src/components/logins/Web3Modal';
import ThirdWeb from '../src/components/logins/ThirdWeb';
import Moralis from '../src/components/logins/Moralis';
import Mock from '../src/components/logins/Mock';

const Home: NextPage = () => {
  const { type } = useLogin();
  const LoginComponent = {
    [ LoginType.Mock ]: Mock,
    [ LoginType.Plain ]: Plain,
    [ LoginType.Web3Modal ]: Web3Modal,
    [ LoginType.ThirdWeb ]: ThirdWeb,
    [ LoginType.Moralis ]: Moralis,
  }[ type ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Web3 Login Showcase | {type} </title>
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
          <LoginComponent/>
          <DynamicCodeComponent/>
        </Stack>
      </Container>
    </>

  );
};

export default Home;
