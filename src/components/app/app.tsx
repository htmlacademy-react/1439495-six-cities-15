import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  rentOffersCount: number;
}

function App({rentOffersCount}: AppProps): JSX.Element {
  return (
    <MainScreen rentOffersCount={rentOffersCount}/>
  );
}

export default App;
