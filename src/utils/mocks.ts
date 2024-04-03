import { name, internet, lorem, date } from 'faker';
import { TCard, TLoggedUser, TOffer, TReview } from '../types/types';
import { AuthorizationStatus, CITIES, SortingOptions } from '../const';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../store';
import { createAPI } from '../services/api';
import { Action } from 'redux';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeUserInfo = (): TLoggedUser => ({
  name: name.title(),
  avatarUrl: internet.avatar(),
  isPro: false,
  email: internet.email(),
  token: lorem.word()
});

export const makeFakeCard = ():TCard => ({
  id: lorem.word(),
  title: name.title(),
  type: lorem.word(),
  price: 1542,
  city: CITIES[0],
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isPremium: false,
  isFavorite: true,
  rating: 4,
  previewImage: internet.url()
});

export const makeFakeOfferInfo = (isFavorite: boolean = false): TOffer => ({
  id: lorem.word(),
  title: name.title(),
  type: lorem.word(),
  price: 1662,
  city: CITIES[0],
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isPremium: false,
  isFavorite: isFavorite,
  rating: 4,
  previewImage: internet.url(),
  images: [],
  description: lorem.text(),
  bedrooms: 2,
  goods: [lorem.words()],
  maxAdults: 2,
  host: {
    name: name.title(),
    avatarUrl: internet.avatar(),
    isPro: true
  },
});

export const makeFakeComment = (): TReview => ({
  id: lorem.word(),
  date: date.recent().toString(),
  user: {
    name: name.title(),
    avatarUrl: internet.avatar(),
    isPro: true
  },
  comment: lorem.text(),
  rating: 3,
});

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  CARDS: {
    cards: {
      data: [],
      isLoading: false,
      isError: false
    },
    sortOption: SortingOptions.POPULAR
  },
  CITY: {
    city: CITIES[0]
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    isAuthError: false,
    userInfo: null,
  },
  OFFER: {
    offer: {
      offerInfo: null,
      nearbyCards: [],
      comments: [],
      isLoading: false,
      isError: false,
      isPostReviewError: false,
      isPostCommentLoading: false
    }
  },
  FAVORITE: {
    favoriteCards: {
      data: [],
      isLoading: false,
      isError: false,
      isLoadingChangeStatus: false
    },
  },
  ...initialState ?? {},
});
