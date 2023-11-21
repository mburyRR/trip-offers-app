import '@testing-library/jest-dom';

import { ChakraBaseProvider } from '@chakra-ui/react';
import { TripFactory } from '@store/__fixtures__/tripsData';
import { fireEvent, render, screen } from '@testing-library/react';
import { defaultTheme } from '@theme/defaultTheme';

import { TripCard } from '../TripCard';

const defaultTripData = TripFactory.build();

const setup = (onClick: jest.Mock) =>
  render(
    <ChakraBaseProvider theme={defaultTheme}>
      <TripCard trip={defaultTripData} onClick={onClick} />
    </ChakraBaseProvider>,
  );

describe('TripCard', () => {
  it('should trigger "learn more" button', async () => {
    const onClick = jest.fn();

    setup(onClick);

    const learnMoreButton = screen.getByTestId('learn-more-button');

    fireEvent.click(learnMoreButton);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
