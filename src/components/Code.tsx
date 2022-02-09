import {
  FC,
  useEffect,
  useState
} from 'react';
import Image from 'next/image';

// @ts-ignore: ignore missing typings
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore: ignore missing typings
import nightOwl from 'react-syntax-highlighter/dist/esm/styles/hljs/night-owl';

import {
  LoginType,
  useLogin
} from '../core';
import { Box } from '@chakra-ui/react';

const Code: FC = () => {
  const { currentLogin } = useLogin();
  const [codeString, setCodeString] = useState('');

  useEffect(() => {
    if (currentLogin !== LoginType.Mock) {
      fetch(`/public/${currentLogin}.login.json`).then((response) => response.json()).then(({ value }) => setCodeString(value));
    }
  }, [currentLogin]);

  return <Box my={2}>
    {currentLogin !== LoginType.Mock
      ? codeString ? <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers={true}>{codeString}</SyntaxHighlighter> : ''
      : <Image src="/mock.png" alt="coding web3 login meme" width={640} height={363}/>
    }
  </Box>;
};

export default Code;
