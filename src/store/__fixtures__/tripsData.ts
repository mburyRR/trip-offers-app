import { faker } from '@faker-js/faker';
import type { Advantage, Trip } from '@services/types';
import { Factory } from 'rosie';

export const AdvantageFactory = new Factory<Advantage>()
  .attr('title', () => faker.word.noun())
  .attr('description', () => faker.lorem.paragraph());

export const TripFactory = new Factory<Trip>()
  .attr('id', () => faker.number.int({ min: 100, max: 1000 }))
  .attr('title', () => faker.commerce.productName())
  .attr('subtitle', () => faker.lorem.sentence())
  .attr('countries', () =>
    faker.helpers.arrayElements([
      faker.location.country(),
      faker.location.country(),
    ]),
  )
  .attr('days', () => faker.number.int({ min: 1, max: 30 }))
  .attr('co2kilograms', () => faker.number.int({ min: 1, max: 1000 }))
  .attr('rating', () => faker.number.float({ min: 1, max: 5, precision: 0.01 }))
  .attr('description', () => faker.lorem.paragraph())
  .attr('advantages', () => AdvantageFactory.buildList(3));

export const TripsStateFactory = new Factory()
  .attr('trips', () => TripFactory.buildList(1))
  .attr('trip', () => TripFactory.build());
