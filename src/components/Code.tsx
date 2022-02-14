import {
  FC,
  useEffect,
  useState
} from 'react';
import {
  Box,
  Button
} from '@chakra-ui/react';

import copy from 'copy-to-clipboard';

// @ts-ignore: ignore missing typings
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore: ignore missing typings
import nightOwl from 'react-syntax-highlighter/dist/esm/styles/hljs/night-owl';

import { useLogin } from '../core';

const Code: FC = () => {
  const { loginType } = useLogin();
  const [codeString, setCodeString] = useState('');

  useEffect(() => {
    fetch(`/${loginType}.login.json`).then((response) => response.json()).then(({ value }) => setCodeString(value));
  }, [loginType]);

  return <Box my={2} width={'100%'}>
    {codeString &&
      <>
        <Button
          position={'absolute'}
          rounded={0}
          right={0}
          onClick={() => copy(codeString)}
        >
          Copy 📄`
        </Button>
        <SyntaxHighlighter
          language="typescript"
          style={nightOwl}
          showLineNumbers={true}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </>
    }
  </Box>;
};

export default Code;
