import { createAction } from '@reduxjs/toolkit';
import { CITIES } from '../const.ts';

export const changeCity = createAction<{city: typeof CITIES[number]}>('changeCity');

export const getCards = createAction('getCards');
