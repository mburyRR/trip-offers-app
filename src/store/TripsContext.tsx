import { Trip, Trips } from '@services/types';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

import githubReducer from './tripsReducer';
import { TripsActionTypes, TripsState } from './types';

export const initialState: TripsState = {
  trips: [],
  trip: null,
  error: null,
  isLoading: false,
  setTrips: () => {},
  appendTrips: () => {},
  setTrip: () => {},
  setIsLoading: () => {},
  setError: () => {},
};

export const TripsContext = createContext<TripsState>(initialState);

export const TripsProvider = ({ children }: PropsWithChildren<object>) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setTrips = (trips: Trips) => {
    dispatch({
      type: TripsActionTypes.SET_TRIPS,
      payload: trips,
    });
  };

  const appendTrips = (trips: Trips) => {
    dispatch({
      type: TripsActionTypes.APPEND_TRIPS,
      payload: trips,
    });
  };

  const setTrip = (trip: Trip) => {
    dispatch({
      type: TripsActionTypes.SET_TRIP,
      payload: trip,
    });
  };

  const setIsLoading = (isLoading: boolean) => {
    dispatch({
      type: TripsActionTypes.SET_LOADING,
      payload: isLoading,
    });
  };

  const setError = (error: string | null) => {
    dispatch({
      type: TripsActionTypes.SET_ERROR,
      payload: {
        error,
      },
    });
  };

  const value = {
    trips: state.trips,
    trip: state.trip,
    error: state.error,
    isLoading: state.isLoading,
    setTrips,
    appendTrips,
    setTrip,
    setIsLoading,
    setError,
  };

  return (
    <TripsContext.Provider value={value}>{children}</TripsContext.Provider>
  );
};

const useTripsContext = () => {
  const context = useContext(TripsContext);

  if (context === undefined) {
    throw new Error('useTripsContext must be used within TripsContext');
  }

  return context;
};

export default useTripsContext;
