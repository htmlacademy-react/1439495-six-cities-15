import { createReducer } from '@reduxjs/toolkit';
import { cards } from '../mock/cards';
import { changeCity, getCards } from './action';
import { CITIES } from '../const.ts';
import { TCard } from '../mock/types.ts';

export type StateType = {
  city: typeof CITIES[number];
  cards: TCard[];
}

const initialState: StateType = {
  city: CITIES[0],
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
