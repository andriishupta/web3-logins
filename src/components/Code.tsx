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

const CopyLabel = 'Copy 📄';
const CopiedLabel = 'Copied ✅';

const Code: FC = () => {
  const { loginType } = useLogin();
  const [codeString, setCodeString] = useState('');
  const [copyLabel, setCopyLabel] = useState(CopyLabel);

  useEffect(() => {
    fetch(`/${loginType}.login.json`).then((response) => response.json()).then(({ value }) => setCodeString(value));
  }, [loginType]);

  const handleCopy = () => {
    copy(codeString);
    setCopyLabel(CopiedLabel);
    setTimeout(() => setCopyLabel(CopyLabel), 1000);
  };

  return <Box my={2} width={'100%'}>
    {codeString &&
      <>
        <Button
          position={'absolute'}
          rounded={0}
          right={0}
          onClick={handleCopy}
        >
          {copyLabel}
        </Button>
        <SyntaxHighlighter
          language="typescript"
          style={nightOwl}
          showLineNumbers={true}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>

        Description: reactmarkdown
      </>
    }
  </Box>;
};

export default Code;
