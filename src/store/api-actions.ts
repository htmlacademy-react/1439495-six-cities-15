import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, store } from '.';
import { APIRoute } from '../const';
import { TAuthInfo, TCard, TLoggedUser, TOffer, TReview, PostCommentInfo } from '../types/types';
import { dropToken, saveToken } from '../services/token';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: typeof store.dispatch;
  extra: AxiosInstance;
}>();

export const fetchCards = createAppAsyncThunk<TCard[], undefined>('cards/fetchCards',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TCard[]>(APIRoute.Cards);
    return data;
  }
);

export const checkAuthStatus = createAppAsyncThunk<TLoggedUser, undefined>('user/checkAuthStatus',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TLoggedUser>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAppAsyncThunk<TLoggedUser, TAuthInfo>('user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TLoggedUser>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAppAsyncThunk<void, undefined>('user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const getOfferInfoByID = createAppAsyncThunk<TOffer, string>('offer/getOfferInfo',
  async (id, {extra: api}) => {
    const {data} = await api.get<TOffer>(`${APIRoute.Cards}/${id}`);
    return data;
  }
);

export const fetchNearbyCards = createAppAsyncThunk<TCard[], string>('offer/fetchNearbyCards',
  async (id, {extra: api}) => {
    const {data} = await api.get<TCard[]>(`${APIRoute.Cards}/${id}/nearby`);
    return data;
  }
);

export const fetchOfferComments = createAppAsyncThunk<TReview[], string>('offer/fetchOfferComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postCommentToOffer = createAppAsyncThunk<TReview, PostCommentInfo>('offer/postCommentToOffer',
  async ({id, comment}, {extra: api}) => {
    const {data} = await api.post<TReview>(`${APIRoute.Comments}/${id}`, {comment: comment.review, rating: +comment.rating});
    return data;
  }
);

export const fetchFavoriteCards = createAppAsyncThunk<TCard[], undefined>('favorite/fetchCards',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TCard[]>(APIRoute.FavoriteCards);
    return data;
  }
);

export const changeFavoriteStatus = createAppAsyncThunk<TOffer, {offerId: string; status: number}>('favorite/changeStatus',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<TOffer>(`${APIRoute.FavoriteCards}/${offerId}/${status}`);
    return data;
  }
);
