import {
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Link as ChakraLink,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import ErrorContent from '@components/ErrorContent';
import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import Advantages from './components/Advantages';
import DetailsCard from './components/DetailsCard';
import { useTripPage } from './hooks/useTripPage';

export const TripPage: FC = () => {
  const { trip, error, isLoading, formattedDays, emission } = useTripPage();

  if (error) return <ErrorContent />;

  if (isLoading) {
    return (
      <Container maxW="container.xl" py={5}>
        <Stack py={5} gap={5} data-testid="trip-page-skeleton">
          <Skeleton h="10vh" borderRadius={6} />
          <Skeleton h="30vh" borderRadius={6} />
          <Skeleton h="40vh" borderRadius={6} />
        </Stack>
      </Container>
    );
  }

  if (!trip) return null;

  return (
    <Container maxW="container.xl" py={5}>
      <ChakraLink
        as={ReactRouterLink}
        to="/"
        textDecoration="underline"
        fontSize="sm"
        fontWeight="bold"
        color="grey.lightText"
      >
        Go back
      </ChakraLink>
      <Stack mt={10} mb={5} gap={0}>
        <Heading
          variant="h2"
          fontSize="2xl"
          mb={2}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {trip.title}
        </Heading>
        <Text mb={2} fontSize="xs" color="grey.darkText">
          {trip.subtitle}
        </Text>
      </Stack>
      <Grid templateColumns="repeat(6, 1fr)" gap={{ base: 8, lg: 16 }}>
        <GridItem
          colSpan={{
            base: 6,
            lg: 4,
          }}
          order={{ base: 2, lg: 1 }}
        >
          <Image
            borderRadius="xl"
            boxShadow="md"
            boxSize="100%"
            h={400}
            objectFit="cover"
            src={trip.photoUrl}
            alt="Trip Photo"
          />
          <Stack mt={10} gap={4}>
            <Text mb={2} fontSize="md" fontWeight="bold">
              Overview
            </Text>
            <Advantages advantages={trip.advantages} />
          </Stack>
          <Divider my={8} />
          <Stack mt={8} mb={4} gap={0}>
            <Text fontSize="sm" fontWeight={600} color="grey.darkText">
              {trip.description}
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          colSpan={{
            base: 6,
            lg: 2,
          }}
          order={{ base: 1, lg: 2 }}
        >
          <DetailsCard
            countries={trip.countries}
            formattedDays={formattedDays}
            emission={emission}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};
