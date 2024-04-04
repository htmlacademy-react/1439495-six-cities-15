import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardsList from './cards-list';
import { makeFakeCard, makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';

describe('Component: Cards List', () => {
  it('should render correct', () => {
    const mockCards = Array.from({length: 3}, makeFakeCard);
    const expectedTestId = 'cards-list';
    const { withStoreComponent } = withStore(<CardsList cards={mockCards} className='test' />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
