import { Box, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

export const ErrorContent: FC = () => (
  <Flex minH="80vh" direction="column" justifyContent="center">
    <Box marginY={4}>
      <Heading textAlign="center" size="4xl" noOfLines={1}>
        Upss..
      </Heading>
      <Heading textAlign="center" size="xl" noOfLines={1}>
        Something went wrong..
      </Heading>
    </Box>
  </Flex>
);
