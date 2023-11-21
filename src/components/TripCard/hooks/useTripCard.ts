import { Trip } from '@services/types';
import {
  formatCountriesCount,
  formatDaysCount,
  formatEmission,
} from '@utils/utils';

export const useTripCard = (trip: Trip) => {
  const { photoUrl, title, countries, days, rating, co2kilograms } = trip;

  const roundedRating = Math.min(Math.max(rating, 0), 5);
  const formattedCountries = formatCountriesCount(countries.length);
  const formattedDays = formatDaysCount(days);
  const subtitle = `${formattedCountries}, ${formattedDays}`;
  const emission = formatEmission(co2kilograms);

  return {
    photoUrl,
    title,
    subtitle,
    rating: roundedRating,
    emission,
  };
};
