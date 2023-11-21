import fakeServices from '@services/fakeServices';
import useTripsContext from '@store/TripsContext';
import { formatDaysCount, formatEmission } from '@utils/utils';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useTripPage = () => {
  const { id } = useParams();
  const { setTrip, setError, setIsLoading, trip, error, isLoading } =
    useTripsContext();

  const fetchTrip = async () => {
    try {
      setIsLoading(true);

      const { data } = await fakeServices.getTrip(id);

      setTrip(data.data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!trip) {
      fetchTrip();
    }
  }, []);

  const formattedDays = trip ? formatDaysCount(trip.days) : '';
  const emission = trip ? formatEmission(trip.co2kilograms) : '';

  return {
    trip,
    error,
    isLoading,
    formattedDays,
    emission,
    fetchTrip,
  };
};
