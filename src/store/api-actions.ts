import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { StateType } from './reducer';
import { APIRoutes } from '../const';
import { TCard } from '../types/types';
import { getCards, setCardsLoadingStatus } from './action';

export const fetchCards = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('cards/fetchCards',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setCardsLoadingStatus(true));
    const {data} = await api.get<TCard[]>(APIRoutes.Cards);
    dispatch(setCardsLoadingStatus(false));
    dispatch(getCards({cards: data}));
  }
);
