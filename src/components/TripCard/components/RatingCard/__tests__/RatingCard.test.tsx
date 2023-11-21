import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { RatingCard } from '../RatingCard';

const setup = () => render(<RatingCard rating={4.3} />);

describe('RatingCard', () => {
  it('should render proper rating value', async () => {
    setup();

    const ratingValue = screen.getByTestId('rating-value');

    expect(ratingValue).toHaveTextContent('4.3');
  });
});
