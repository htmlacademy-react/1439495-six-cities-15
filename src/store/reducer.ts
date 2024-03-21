import { createReducer } from '@reduxjs/toolkit';
import { changeActiveSort, changeAuthorizationStatus, changeCity, getCards, setCardsLoadingStatus, setLoggedUserInfo } from './action';
import { AuthorizationStatus, CITIES, SortingOptions, TSortOptions } from '../const.ts';
import { TCard, TLoggedUser } from '../types/types.ts';

export type StateType = {
  city: typeof CITIES[number];
  cards: {
    cards: TCard[];
    isLoading: boolean;
  };
  sortOption: TSortOptions;
  authorizationStatus: AuthorizationStatus;
  userInfo: TLoggedUser | null;
}

const initialState: StateType = {
  city: CITIES[0],
  cards: {
    cards: [],
    isLoading: false
  },
  sortOption: SortingOptions.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null
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
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLoggedUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export { reducer };
