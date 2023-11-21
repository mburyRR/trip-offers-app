import { Trip, Trips } from '@services/types';

export type TripsState = {
  trips: Trips;
  trip: Trip | null;
  isLoading?: boolean;
  error?: string | null;
  setTrips: (trips: Trips) => void;
  appendTrips: (trips: Trips) => void;
  setTrip: (trip: Trip) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
};

export enum TripsActionTypes {
  SET_TRIPS = 'SET_TRIPS',
  APPEND_TRIPS = 'APPEND_TRIPS',
  SET_TRIP = 'SET_TRIP',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface Action {
  type: TripsActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any; // Payload can be of any type
}
