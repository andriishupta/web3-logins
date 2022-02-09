import type { NextPage } from 'next';
import {
  Box,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const DynamicCodeComponent = dynamic(
  () => import('../src/components/Code'),
  { ssr: false }
);

import { useLogin } from '../src/core';
import Heading from '../src/components/Heading';
import ConnectButton from '../src/components/ConnectButton';
import LoginPicker from '../src/components/LoginPicker';

const Home: NextPage = () => {
  const { currentLogin } = useLogin();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Web3 Login Showcase | {currentLogin} </title>
      </Head>
      <Container maxW={'3xl'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <LoginPicker/>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}>
          <Heading/>
          <ConnectButton/>
        </Stack>

        <DynamicCodeComponent/>
      </Container>
    </>

  );
};

export default Home;
