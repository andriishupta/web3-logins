import {
  Tag,
  TagLabel,
  TagRightIcon
} from '@chakra-ui/tag';

import { Box } from '@chakra-ui/react';

import { AvailableLoginTypes } from '../core';

const LoginPicker = () => {
  return <Box>
    {AvailableLoginTypes.map((availableLoginType) =>
      <Tag size={'lg'} marginX={2} key={availableLoginType} variant="outline" colorScheme="green">
        <TagLabel>{availableLoginType}</TagLabel>
        <TagRightIcon>+</TagRightIcon>
      </Tag>
    )}
  </Box>;
};

export default LoginPicker;
