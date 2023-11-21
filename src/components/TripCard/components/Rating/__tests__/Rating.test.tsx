import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Rating } from '../Rating';

const setup = () => render(<Rating rating={4.3} />);

describe('Rating', () => {
  it('should render proper rating stars count', async () => {
    setup();

    const greyStars = screen.getAllByTestId('grey-star');
    const filledStars = screen.getAllByTestId('filled-star');

    expect(greyStars).toHaveLength(1);
    expect(filledStars).toHaveLength(4);
  });
});
