import singleTrip from '@data/singleTrip.json';
import trips from '@data/trips.json';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const RESPONSE_DELAY = 1500;
const ITEMS_PER_PAGE = 15;

export default (): void => {
  const httpMock = new AxiosMockAdapter(axios, {
    delayResponse: RESPONSE_DELAY,
  });

  httpMock.onGet('/trips').reply((config) => {
    const page = Number(config.params.page) || 1;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const paginatedTrips = trips.slice(start, end);

    return [200, { data: paginatedTrips, totalItems: trips.length }];
  });

  httpMock.onGet('/trip/1').reply(() => {
    return [
      200,
      {
        data: singleTrip,
      },
    ];
  });
};
