import {
  formatCountriesCount,
  formatDaysCount,
  formatEmission,
} from '../utils';

describe('formatCountriesCount', () => {
  it('should return formatted countries label when count = 1', () => {
    const results = formatCountriesCount(1);
    const expectedResults = '1 country';

    expect(results).toEqual(expectedResults);
  });

  it('should return formatted countries label when count > 1', () => {
    const results = formatCountriesCount(2);
    const expectedResults = '2 countries';

    expect(results).toEqual(expectedResults);
  });
});

describe('formatDaysCount', () => {
  it('should return formatted days label when days = 1', () => {
    const results = formatDaysCount(1);
    const expectedResults = '1 day';

    expect(results).toEqual(expectedResults);
  });

  it('should return formatted days label when days > 1', () => {
    const results = formatDaysCount(2);
    const expectedResults = '2 days';

    expect(results).toEqual(expectedResults);
  });
});

describe('formatEmission', () => {
  it('should return formatted emisson label when co2kilograms < 1000', () => {
    const results = formatEmission(100);
    const expectedResults = '100 kg';

    expect(results).toEqual(expectedResults);
  });

  it('should return formatted emisson label when co2kilograms >= 1000', () => {
    const results = formatEmission(1000);
    const expectedResults = '1 t';

    expect(results).toEqual(expectedResults);
  });
});
