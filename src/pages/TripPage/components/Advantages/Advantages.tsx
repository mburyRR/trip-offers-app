import { ChatIcon } from '@chakra-ui/icons';
import { SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { AdvantagesProps } from './Advantages.types';

export const Advantages: FC<AdvantagesProps> = ({ advantages }) => (
  <SimpleGrid
    columns={{
      base: 1,
      lg: 2,
    }}
    spacing={4}
  >
    {advantages.map((advantage) => (
      <Stack
        key={advantage.title}
        flexDirection="row"
        gap={4}
        data-testid="advantage-item"
      >
        <ChatIcon w={6} h={6} color="grey.darkText" />
        <Stack gap={0}>
          <Text
            mb={2}
            fontSize="md"
            fontWeight="bold"
            color="grey.darkText"
            data-testid="advantage-title"
          >
            {advantage.title}
          </Text>
          <Text
            mb={2}
            fontSize="xs"
            color="grey.lightText"
            data-testid="advantage-description"
          >
            {advantage.description}
          </Text>
        </Stack>
      </Stack>
    ))}
  </SimpleGrid>
);
