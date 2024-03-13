import { createReducer } from '@reduxjs/toolkit';
import { cards } from '../mock/cards';
import { changeCity, getCards } from './action';
import { CITIES } from '../const.ts';
import { TCard } from '../mock/types.ts';

type initialStateType = {
  city: typeof CITIES[number];
  cards: TCard[];
}

const initialState: initialStateType = {
  city: 'Amsterdam',
  cards: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getCards, (state) => {
      state.cards = cards;
    });
});

export { reducer };
