import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, TSortOptions } from '../const.ts';
import { TCard, TLoggedUser } from '../types/types.ts';

export const changeCity = createAction<{city: typeof CITIES[number]}>('city/changeCity');

export const getCards = createAction<{cards: TCard[]}>('cards/getCards');

export const changeActiveSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');

export const setCardsLoadingStatus = createAction<boolean>('cards/setLoadingStatus');

export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');

export const setLoggedUserInfo = createAction<TLoggedUser | null>('user/setLoggedUserInfo');
