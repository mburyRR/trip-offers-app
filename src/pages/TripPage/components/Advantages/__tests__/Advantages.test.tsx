import '@testing-library/jest-dom';

import { AdvantageFactory } from '@store/__fixtures__/tripsData';
import { render, screen } from '@testing-library/react';

import { Advantages } from '../Advantages';

const defaultAdvantages = AdvantageFactory.buildList(3);

const setup = () => render(<Advantages advantages={defaultAdvantages} />);

describe('Advantages', () => {
  it('should render proper rating value', async () => {
    setup();

    const advantages = screen.getAllByTestId('advantage-item');
    const title = screen.getAllByTestId('advantage-title')[0];
    const description = screen.getAllByTestId('advantage-description')[0];

    expect(advantages).toHaveLength(3);
    expect(title).toHaveTextContent(defaultAdvantages[0].title);
    expect(description).toHaveTextContent(defaultAdvantages[0].description);
  });
});
