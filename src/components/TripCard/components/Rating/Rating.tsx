import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FC } from 'react';

import { RatingProps } from './Rating.types';

export const Rating: FC<RatingProps> = ({ rating }) => {
  const filledStars = Math.round(rating);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <Box key={index} mr={1}>
      <Icon
        as={StarIcon}
        color={index < filledStars ? 'brand.yellow' : 'gray.lightAction'}
        boxSize={5}
        data-testid={index < filledStars ? 'filled-star' : 'grey-star'}
      />
    </Box>
  ));

  return <Flex>{stars}</Flex>;
};
