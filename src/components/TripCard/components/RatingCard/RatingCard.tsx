import { Box, Card, CardBody, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Rating } from '../Rating/Rating';
import { RatingCardProps } from './RatingCard.types';

export const RatingCard: FC<RatingCardProps> = ({ rating }) => (
  <Card borderRadius="xl" borderBottomRadius={0} w="100%" boxShadow="none">
    <CardBody
      pt={2}
      pb={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontWeight="bold" fontSize="sm" h="auto" mt={1}>
        Trip rating
      </Text>
      <Box display="flex" alignItems="center" gap={1}>
        <Rating rating={rating} />
        <Text fontWeight="bold" fontSize="sm" mt={1} data-testid="rating-value">
          {rating}
        </Text>
      </Box>
    </CardBody>
  </Card>
);
