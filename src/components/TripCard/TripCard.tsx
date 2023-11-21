import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import EmissionCard from './components/EmissionCard';
import RatingCard from './components/RatingCard';
import { useTripCard } from './hooks/useTripCard';
import { TripCardProps } from './TripCard.types';

export const TripCard: FC<TripCardProps> = ({ trip, onClick }) => {
  const { photoUrl, title, subtitle, rating, emission } = useTripCard(trip);

  return (
    <Box
      h={300}
      w={{ base: '100%', md: 364 }}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      position="relative"
      bg="brand.white"
    >
      <Box position="relative">
        <Box
          bgImage={`linear-gradient(180deg, rgba(0,0,0, 1) 0%, rgba(215,215,215, 0.4) 50%, rgba(255,255,255, 0) 100%)`}
          w={{ base: 'calc(100% - 16px)', md: 348 }}
          h={282}
          bgSize="cover"
          position="absolute"
          borderRadius="lg"
          opacity={0.7}
          top={2}
          left={2}
          zIndex={2}
        />
        <Image
          src={photoUrl}
          w={{ base: 'calc(100% - 16px)', md: 348 }}
          h={282}
          bgSize="cover"
          bgPosition="center"
          position="absolute"
          borderRadius="lg"
          top={2}
          left={2}
          zIndex={1}
          loading="lazy"
        />
      </Box>

      <Stack
        px={8}
        pb={2.5}
        w="100%"
        h="100%"
        position="absolute"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        zIndex={3}
      >
        <Stack pt={10} gap={0} alignItems="center">
          <Heading
            variant="h2"
            fontSize="2xl"
            mb={2}
            color="brand.white"
            textAlign="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Heading>
          <Text mb={2} fontSize="xs" color="brand.white" textAlign="center">
            {subtitle}
          </Text>
        </Stack>

        <Box mb={3}>
          <Button
            onClick={() => onClick(trip)}
            colorScheme="blue"
            fontWeight={500}
            size="md"
            data-testid="learn-more-button"
          >
            Learn more
          </Button>
        </Box>

        <Stack w="100%">
          <EmissionCard emission={emission} />
          <RatingCard rating={rating} />
        </Stack>
      </Stack>
    </Box>
  );
};
