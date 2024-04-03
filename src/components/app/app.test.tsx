import { render, screen} from '@testing-library/react';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import App from './app';
import { withStore } from '../../utils/mock-component';
import { makeFakeOfferInfo, makeFakeStore, makeFakeUserInfo } from '../../utils/mocks';
import { AppRoutes, AuthorizationStatus } from '../../const';

describe('Application Routing', () => {

  it('should render "MainScreen" when user navigate to "/"', () => {
    const expectedText = 'No places to stay available';
    const { withStoreComponent } = withStore(<App />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render "OfferScreen" when user navigate to "/offer/id"', () => {
    const expectedTestId = 'Offer Page';
    const { withStoreComponent } = withStore(<App />, makeFakeStore({
      OFFER: {
        offer: {
          offerInfo: makeFakeOfferInfo(),
          nearbyCards: [],
          comments: [],
          isLoading: false,
          isError: false,
          isPostReviewError: false,
          isPostCommentLoading: false
        }
      }
    }));
    render(
      <MemoryRouter initialEntries={[AppRoutes.Offer]}>
        {withStoreComponent}
      </MemoryRouter>
    );
    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    const expectedTestId = 'Login Page';
    const { withStoreComponent } = withStore(<App />, makeFakeStore());
    render(
      <MemoryRouter initialEntries={[AppRoutes.Login]}>
        {withStoreComponent}
      </MemoryRouter>
    );
    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    const expectedText = 'Nothing yet saved.';
    const { withStoreComponent } = withStore(<App />, makeFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        userInfo: makeFakeUserInfo(),
        isAuthError: false
      }
    }));
    render(
      <MemoryRouter initialEntries={[AppRoutes.Favorites]}>
        {withStoreComponent}
      </MemoryRouter>
    );
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    const expectedText = 'Вернуться на главную';
    const { withStoreComponent } = withStore(<App />, makeFakeStore());
    render(
      <MemoryRouter initialEntries={['/non-existent']}>
        {withStoreComponent}
      </MemoryRouter>
    );
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
