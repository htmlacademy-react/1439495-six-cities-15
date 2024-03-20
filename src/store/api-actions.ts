import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { StateType } from './reducer';
import { APIRoutes } from '../const';
import { TCard } from '../types/types';
import { getCards } from './action';

export const fetchCards = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('cards/fetchCards',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TCard[]>(APIRoutes.Cards);
    dispatch(getCards({cards: data}));
  }
);
