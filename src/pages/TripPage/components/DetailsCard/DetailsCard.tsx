import {
  Box,
  Divider,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { FC } from 'react';

import { DetailsCardProps } from './DetailsCard.types';

export const DetailsCard: FC<DetailsCardProps> = ({
  countries,
  emission,
  formattedDays,
}) => (
  <Box
    boxShadow="md"
    w="100%"
    h="fit-content"
    bg="brand.white"
    p={5}
    borderRadius="xl"
  >
    <Heading
      variant="h3"
      fontSize="xl"
      mb={2}
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {formattedDays}
    </Heading>
    <Text mb={2} fontSize="xs" fontWeight="600" color="grey.darkText">
      {`Emissions: ${emission} CO₂e`}
    </Text>
    <Divider my={6} />
    <Text mb={2} fontSize="xs" fontWeight="600" color="grey.darkText">
      Countries includes:
    </Text>
    <SimpleGrid columns={2} spacing={4}>
      <UnorderedList ml={6}>
        {countries
          .slice(0, Math.ceil(countries.length / 2))
          .map((item, index) => (
            <ListItem key={index}>
              <Text fontSize="xs" color="grey.darkText">
                {item}
              </Text>
            </ListItem>
          ))}
      </UnorderedList>
      <UnorderedList ml={6}>
        {countries.slice(Math.ceil(countries.length / 2)).map((item, index) => (
          <ListItem key={index}>
            <Text fontSize="xs" color="grey.darkText">
              {item}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </SimpleGrid>
  </Box>
);
