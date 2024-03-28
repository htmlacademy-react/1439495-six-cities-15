import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks.ts';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import { AppRoutes, AuthorizationStatus } from '../../const.ts';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import ScrollToTop from '../scroll-to-top/scroll-to-top.tsx';
import Layout from '../layout/layout.tsx';
import { checkAuthStatus, fetchCards, fetchFavoriteCards } from '../../store/api-actions.ts';
import LoadingSpinner from '../loading-spinner/loading-spinner.tsx';
import { getCardsLoadingStatus } from '../../store/cards/cards-selectors.ts';
import { getAuthorizationStatus } from '../../store/user/user-selectors.ts';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getCardsLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchCards());
    dispatch(checkAuthStatus());
  }, [dispatch]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteCards());
    }
  }, [dispatch, authorizationStatus]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.Main} element={<Layout />}>
          <Route index element={<MainScreen />} />
          <Route
            path={AppRoutes.Login}
            element={
              <PrivateRoute isReverse>
                <LoginScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.Offer} element={<OfferScreen />} />
        </Route>
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
