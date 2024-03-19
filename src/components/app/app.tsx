import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/store-hooks.ts';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import { AppRoutes, AuthorizationStatus } from '../../const.ts';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import ScrollToTop from '../scroll-to-top/scroll-to-top.tsx';
import Layout from '../layout/layout.tsx';
import { getCards } from '../../store/action.ts';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.Main} element={<Layout authorizationStatus={AuthorizationStatus.Auth} />}>
          <Route index element={<MainScreen />} />
          <Route
            path={AppRoutes.Login}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} isReverse>
                <LoginScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
