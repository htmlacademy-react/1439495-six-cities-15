import { createAction } from '@reduxjs/toolkit';
import { CITIES, TSortOptions } from '../const.ts';

export const changeCity = createAction<{city: typeof CITIES[number]}>('city/changeCity');

export const getCards = createAction('cards/getCards');

export const changeActiveSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');
