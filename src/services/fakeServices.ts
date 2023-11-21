import mock from '@services/fakeApi';
import axios, { AxiosResponse } from 'axios';

import { Trip, Trips } from './types';

mock();

const getTrips = (
  page: number,
): Promise<
  AxiosResponse<{
    data: Trips;
    totalItems: number;
  }>
> => axios.get('/trips', { params: { page } });

const getTrip = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id?: string,
): Promise<
  AxiosResponse<{
    data: Trip;
  }>
> => axios.get(`/trip/1`);
// > => axios.get(`/trip/${id}`) - for the real API case;

export default {
  getTrips,
  getTrip,
};
