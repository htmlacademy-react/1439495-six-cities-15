import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { citySlice } from './city/city-slice';
import { cardsSlice } from './cards/cards-slice';
import { offerSlice } from './offer/offer-slice';
import { userSlice } from './user/user-slice';

export const rootReducer = combineReducers({
  [NameSpace.City]: citySlice.reducer,
  [NameSpace.Cards]: cardsSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.User]: userSlice.reducer
});
