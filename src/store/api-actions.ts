import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, store } from '.';
import { APIRoute } from '../const';
import { TAuthInfo, TCard, TLoggedUser, TOffer, TReview, PostCommentInfo } from '../types/types';
import { dropToken, saveToken } from '../services/token';

export const fetchCards = createAsyncThunk<TCard[], undefined, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('cards/fetchCards',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TCard[]>(APIRoute.Cards);
    return data;
  }
);

export const checkAuthStatus = createAsyncThunk<TLoggedUser, undefined, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('user/checkAuthStatus',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TLoggedUser>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<TLoggedUser, TAuthInfo, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TLoggedUser>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const getOfferInfoByID = createAsyncThunk<TOffer, string, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('offer/getOfferInfo',
  async (id, {extra: api}) => {
    const {data} = await api.get<TOffer>(`${APIRoute.Cards}/${id}`);
    return data;
  }
);

export const fetchNearbyCards = createAsyncThunk<TCard[], string, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('offer/fetchNearbyCards',
  async (id, {extra: api}) => {
    const {data} = await api.get<TCard[]>(`${APIRoute.Cards}/${id}/nearby`);
    return data;
  }
);

export const fetchOfferComments = createAsyncThunk<TReview[], string, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('offer/fetchOfferComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postCommentToOffer = createAsyncThunk<TReview, PostCommentInfo, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>('offer/postCommentToOffer',
  async ({id, comment}, {extra: api}) => {
    const {data} = await api.post<TReview>(`${APIRoute.Comments}/${id}`, {comment: comment.review, rating: +comment.rating});
    return data;
  }
);
