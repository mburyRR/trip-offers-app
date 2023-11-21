import {
  Center,
  Container,
  Grid,
  GridItem,
  Skeleton,
  Stack,
} from '@chakra-ui/react';
import ErrorContent from '@components/ErrorContent';
import TripCard from '@components/TripCard';
import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useHomepage } from './hooks/useHomepage';

export const Homepage: FC = () => {
  const {
    trips,
    error,
    isLoading,
    totalTrips,
    fetchTrips,
    fetchMoreTrips,
    handleSelectTrip,
  } = useHomepage();

  if (error) return <ErrorContent />;

  if (isLoading) {
    return (
      <Container maxW="container.xl">
        <Stack py={5} gap={6} data-testid="homepage-skeleton">
          {Array.from({ length: 5 }, (_, index) => (
            <Skeleton key={index} h={300} mx={4} borderRadius="xl" />
          ))}
        </Stack>
      </Container>
    );
  }

  if (!trips.length) return null;

  return (
    <InfiniteScroll
      height="100vh"
      dataLength={trips.length}
      next={fetchMoreTrips}
      hasMore={totalTrips !== null && trips.length < totalTrips}
      loader={<p>Loading...</p>}
      pullDownToRefresh
      pullDownToRefreshThreshold={75}
      refreshFunction={fetchTrips}
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
          py={5}
        >
          {trips.map((trip) => (
            <GridItem key={trip.id}>
              <Center>
                <TripCard trip={trip} onClick={handleSelectTrip} />
              </Center>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </InfiniteScroll>
  );
};
