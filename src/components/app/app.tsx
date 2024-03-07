import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import { AppRoutes, AuthorizationStatus } from '../../const.ts';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import ScrollToTop from '../scroll-to-top/scroll-to-top.tsx';
import Layout from '../layout/layout.tsx';
import { TCard } from '../../mock/types.ts';

type AppProps = {
  rentOffersCount: number;
  cards: TCard[];
}

function App({rentOffersCount, cards}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.Main} element={<Layout />}>
          <Route index element={<MainScreen rentOffersCount={rentOffersCount} cards={cards}/>} />
          <Route path={AppRoutes.Login} element={<LoginScreen />} />
          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen cards={cards} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.Offer} element={<OfferScreen cards={cards} />} />
        </Route>
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
