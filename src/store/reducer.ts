import { createReducer } from '@reduxjs/toolkit';
import { changeActiveSort, changeAuthorizationStatus, changeCity, getCards, setCardsLoadingStatus, setIsAuthError, setIsPostReviewError, setLoggedUserInfo, setNearbyCards, setOfferComments, setOfferInfo, setOfferLoadingStatus } from './action';
import { AuthorizationStatus, CITIES, SortingOptions, TSortOptions } from '../const.ts';
import { TCard, TLoggedUser, TOffer, TReview } from '../types/types.ts';

export type StateType = {
  city: typeof CITIES[number];
  cards: {
    data: TCard[];
    isLoading: boolean;
  };
  sortOption: TSortOptions;
  authorizationStatus: AuthorizationStatus;
  isAuthError: boolean;
  userInfo: TLoggedUser | null;
  offer: {
    offerInfo: TOffer | null;
    nearbyCards: TCard[];
    comments: TReview[];
    isLoading: boolean;
    isPostReviewError: boolean;
  };
}

const initialState: StateType = {
  city: CITIES[0],
  cards: {
    data: [],
    isLoading: false
  },
  sortOption: SortingOptions.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthError: false,
  userInfo: null,
  offer: {
    offerInfo: null,
    nearbyCards: [],
    comments: [],
    isLoading: false,
    isPostReviewError: false
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getCards, (state, action) => {
      state.cards.data = action.payload.cards;
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
    })
    .addCase(setOfferInfo, (state, action) => {
      state.offer.offerInfo = action.payload;
    })
    .addCase(setNearbyCards, (state, action) => {
      state.offer.nearbyCards = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.offer.isLoading = action.payload;
    })
    .addCase(setOfferComments, (state, action) => {
      state.offer.comments = action.payload;
    })
    .addCase(setIsAuthError, (state, action) => {
      state.isAuthError = action.payload;
    })
    .addCase(setIsPostReviewError, (state, action) => {
      state.offer.isPostReviewError = action.payload;
    });
});

export { reducer };
