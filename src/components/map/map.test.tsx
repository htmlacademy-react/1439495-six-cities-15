import { render, screen } from '@testing-library/react';
import { makeFakeCard } from '../../utils/mocks';
import { CITIES } from '../../const';
import Map from './map';

describe('Component: Map', () => {
  it('should render correct', () => {
    const mockCards = Array.from({length: 3}, makeFakeCard);
    const mockCity = CITIES[0];
    const expectedTestId = 'map';

    render(<Map cards={mockCards} city={mockCity} />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
