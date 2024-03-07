import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { cards } from './mock/cards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentOffersCount={Setting.RentOffersCount} cards={cards}/>
  </React.StrictMode>
);
