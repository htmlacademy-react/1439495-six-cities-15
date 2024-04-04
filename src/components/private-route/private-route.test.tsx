import { render, screen } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import PrivateRoute from './private-route';
import { withStore } from '../../utils/mock-component';
import { makeFakeStore, makeFakeUserInfo } from '../../utils/mocks';

describe('Component: PrivateRoute', () => {

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';

    const { withStoreComponent: withStorePrivateRoute} = withStore((
      <PrivateRoute>
        <span>{notExpectedText}</span>
      </PrivateRoute>
    ), makeFakeStore());
    const preparedComponent = (
      <Routes>
        <Route path={AppRoutes.Login} element={<span>{expectedText}</span>} />
        <Route path={AppRoutes.Favorites} element={withStorePrivateRoute} />
      </Routes>
    );

    render(
      <MemoryRouter initialEntries={[AppRoutes.Favorites]}>
        {preparedComponent}
      </MemoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';

    const { withStoreComponent: withStorePrivateRoute} = withStore((
      <PrivateRoute>
        <span>{expectedText}</span>
      </PrivateRoute>
    ), makeFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        userInfo: makeFakeUserInfo(),
        isAuthError: false
      }
    }));
    const preparedComponent = (
      <Routes>
        <Route path={AppRoutes.Login} element={<span>{notExpectedText}</span>} />
        <Route path={AppRoutes.Favorites} element={withStorePrivateRoute} />
      </Routes>
    );

    render(
      <MemoryRouter initialEntries={[AppRoutes.Favorites]}>
        {preparedComponent}
      </MemoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
