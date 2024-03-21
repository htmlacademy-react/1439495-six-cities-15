import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { StateType } from './reducer';
import { APIRoutes, AuthorizationStatus } from '../const';
import { TAuthInfo, TCard, TLoggedUser } from '../types/types';
import { changeAuthorizationStatus, getCards, setCardsLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';

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

export const checkAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('user/checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, TAuthInfo, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TLoggedUser>(APIRoutes.Login, {email, password});
    saveToken(data.token);
    dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);
