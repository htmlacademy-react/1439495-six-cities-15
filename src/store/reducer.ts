import { createReducer } from '@reduxjs/toolkit';
import { cards } from '../mock/cards';
import { changeCardsSort, changeCity, getCards } from './action';
import { CITIES, SortingOptions, TSortOptions } from '../const.ts';
import { TCard } from '../mock/types.ts';

export type StateType = {
  city: typeof CITIES[number];
  cards: TCard[];
  sortOption: TSortOptions;
}

const initialState: StateType = {
  city: CITIES[0],
  cards: [],
  sortOption: SortingOptions.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getCards, (state) => {
      state.cards = cards;
    })
    .addCase(changeCardsSort, (state, action) => {
      state.sortOption = action.payload.option;
    });
});

export { reducer };
