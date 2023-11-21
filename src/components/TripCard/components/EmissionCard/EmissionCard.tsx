import { Card, CardBody, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { EmissionCardProps } from './EmissionCard.types';

export const EmissionCard: FC<EmissionCardProps> = ({ emission }) => (
  <Card w="100%" borderRadius="xl" bg="blue.900">
    <CardBody p={2} display="flex" justifyContent="space-between">
      <Text color="brand.white" fontSize="sm">
        Emissions offset:
      </Text>
      <Text color="brand.white" fontSize="sm" data-testid="emission-value">
        {emission} CO₂e
      </Text>
    </CardBody>
  </Card>
);
