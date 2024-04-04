import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { makeFakeCard, makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import FavoriteCard from './favorite-card';

describe('Component: Favorite Card', () => {
  it('should render correct', () => {
    const mockCard = makeFakeCard();
    const expectedText = mockCard.title;
    const { withStoreComponent } = withStore(<FavoriteCard card={mockCard} />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
