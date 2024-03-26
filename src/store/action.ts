import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, TSortOptions } from '../const.ts';
import { TCard, TLoggedUser, TOffer, TReview } from '../types/types.ts';

export const changeCity = createAction<{city: typeof CITIES[number]}>('city/changeCity');

export const getCards = createAction<{cards: TCard[]}>('cards/getCards');

export const changeActiveSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');

export const setCardsLoadingStatus = createAction<boolean>('cards/setLoadingStatus');

export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');

export const setLoggedUserInfo = createAction<TLoggedUser | null>('user/setLoggedUserInfo');

export const setIsAuthError = createAction<boolean>('user/setIsAuthError');

export const setOfferInfo = createAction<TOffer>('offer/setOfferInfo');

export const setNearbyCards = createAction<TCard[]>('offer/setNearbyCards');

export const setOfferLoadingStatus = createAction<boolean>('offer/setOfferLoadingStatus');

export const setOfferComments = createAction<TReview[]>('offer/setOfferComments');

export const setIsPostReviewError = createAction<boolean>('offer/setIsPostReviewError');
