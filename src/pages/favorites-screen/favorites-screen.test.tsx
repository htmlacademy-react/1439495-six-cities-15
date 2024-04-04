import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { makeFakeOfferInfo, makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import FavoritesScreen from './favorites-screen';

describe('Component: Favorites Screen', () => {
  it('should render correct', () => {
    const expectedText = 'Saved listing';
    const { withStoreComponent } = withStore(<FavoritesScreen />, makeFakeStore({
      FAVORITE: {
        favoriteCards: {
          data: [makeFakeOfferInfo()],
          isLoading: false,
          isError: false,
          isLoadingChangeStatus: false
        },
      }
    }));

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
