import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import { AppRoutes } from '../../const.ts';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import { OFFER_CARD } from '../../mock/offer-card.ts';

type AppProps = {
  rentOffersCount: number;
}

function App({rentOffersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainScreen rentOffersCount={rentOffersCount}/>} />
        <Route path={AppRoutes.Login} element={<LoginScreen />} />
        <Route path={AppRoutes.Favorites} element={<FavoritesScreen />} />
        <Route path={AppRoutes.Offer} element={<OfferScreen offerInfo={OFFER_CARD}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
