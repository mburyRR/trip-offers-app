import { Trip } from '@services/types';

export interface TripCardProps {
  trip: Trip;
  onClick: (trip: Trip) => void;
}
