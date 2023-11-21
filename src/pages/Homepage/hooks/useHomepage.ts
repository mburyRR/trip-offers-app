import fakeServices from '@services/fakeServices';
import { Trip } from '@services/types';
import useTripsContext from '@store/TripsContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHomepage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalTrips, setTotalTrips] = useState<number | null>(null);

  const {
    setTrips,
    appendTrips,
    setIsLoading,
    setError,
    trips,
    error,
    isLoading,
  } = useTripsContext();

  const fetchTrips = async () => {
    try {
      setIsLoading(true);

      const { data } = await fakeServices.getTrips(page);

      setTrips(data.data);
      setTotalTrips(data.totalItems);
      setPage(1);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreTrips = async () => {
    try {
      const { data } = await fakeServices.getTrips(page + 1);

      appendTrips(data.data);
      setPage(page + 1);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    }
  };

  useEffect(() => {
    if (!trips.length) {
      fetchTrips();
    }
  }, []);

  const handleSelectTrip = (trip: Trip) => {
    navigate(`/trip/${trip.id}`);
  };

  return {
    trips,
    error,
    isLoading,
    totalTrips,
    fetchTrips,
    fetchMoreTrips,
    handleSelectTrip,
  };
};
