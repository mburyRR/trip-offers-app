/* eslint-disable indent */
import { Action, TripsActionTypes, TripsState } from './types';

const githubReducer = (state: TripsState, action: Action): TripsState => {
  const { type, payload } = action;

  switch (type) {
    case TripsActionTypes.SET_TRIPS:
      return {
        ...state,
        trips: payload,
        isLoading: false,
      };
    case TripsActionTypes.APPEND_TRIPS:
      return {
        ...state,
        trips: [...state.trips, ...payload],
        isLoading: false,
      };
    case TripsActionTypes.SET_TRIP:
      return {
        ...state,
        trip: payload,
        isLoading: false,
      };
    case TripsActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case TripsActionTypes.SET_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      throw new Error(`No case for type ${type} found in githubReducer.`);
  }
};

export default githubReducer;
