import { createReducer } from '@reduxjs/toolkit';
import { changeActiveSort, changeCity, getCards, setCardsLoadingStatus } from './action';
import { CITIES, SortingOptions, TSortOptions } from '../const.ts';
import { TCard } from '../types/types.ts';

export type StateType = {
  city: typeof CITIES[number];
  cards: {
    cards: TCard[];
    isLoading: boolean;
  };
  sortOption: TSortOptions;
}

const initialState: StateType = {
  city: CITIES[0],
  cards: {
    cards: [],
    isLoading: false
  },
  sortOption: SortingOptions.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getCards, (state, action) => {
      state.cards.cards = action.payload.cards;
    })
    .addCase(changeActiveSort, (state, action) => {
      state.sortOption = action.payload.option;
    })
    .addCase(setCardsLoadingStatus, (state, action) => {
      state.cards.isLoading = action.payload;
    });
});

export { reducer };
