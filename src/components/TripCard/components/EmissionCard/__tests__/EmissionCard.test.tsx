import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { EmissionCard } from '../EmissionCard';

const setup = () => render(<EmissionCard emission="200 kg" />);

describe('EmissionCard', () => {
  it('should render proper emission value', async () => {
    setup();

    const emissionValue = screen.getByTestId('emission-value');

    expect(emissionValue).toHaveTextContent('200 kg CO₂e');
  });
});
