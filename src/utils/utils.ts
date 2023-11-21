export const formatCountriesCount = (count: number) =>
  `${count} ${count === 1 ? 'country' : 'countries'}`;

export const formatDaysCount = (days: number) =>
  `${days} ${days === 1 ? 'day' : 'days'}`;

export const formatEmission = (co2kilograms: number) => {
  const number = co2kilograms < 1000 ? co2kilograms : co2kilograms / 1000;
  const parsedNumber = parseFloat(number.toFixed(1));

  return co2kilograms < 1000 ? `${parsedNumber} kg` : `${parsedNumber} t`;
};
