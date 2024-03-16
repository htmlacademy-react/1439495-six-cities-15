import { createAction } from '@reduxjs/toolkit';
import { CITIES } from '../const.ts';

export const changeCity = createAction<{city: typeof CITIES[number]}>('city/changeCity');

export const getCards = createAction('cards/getCards');
