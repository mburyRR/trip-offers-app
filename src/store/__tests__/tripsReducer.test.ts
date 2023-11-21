import { TripFactory, TripsStateFactory } from '@store/__fixtures__/tripsData';
import { TripsActionTypes, TripsState } from '@store/types';

import tripsReducer from '../tripsReducer';

const defaultTripsStateData: TripsState = TripsStateFactory.build();
const defaultTripsData = TripFactory.buildList(5);
const defaultActionData = {
  type: TripsActionTypes.SET_TRIPS,
  payload: defaultTripsData,
};

describe('tripsReducer', () => {
  it('should return proper schema', () => {
    const results = tripsReducer(defaultTripsStateData, defaultActionData);

    expect(results).toEqual({
      ...defaultTripsStateData,
      trips: defaultTripsData,
      isLoading: false,
    });
  });
});
