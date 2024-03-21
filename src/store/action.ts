import { createAction } from '@reduxjs/toolkit';
import { CITIES, TSortOptions } from '../const.ts';
import { TCard } from '../types/types.ts';

export const changeCity = createAction<{city: typeof CITIES[number]}>('city/changeCity');

export const getCards = createAction<{cards: TCard[]}>('cards/getCards');

export const changeActiveSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');

export const setCardsLoadingStatus = createAction<boolean>('cards/setLoadingStatus');
