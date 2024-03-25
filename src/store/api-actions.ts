import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { StateType } from './reducer';
import { APIRoute, AuthorizationStatus } from '../const';
import { TAuthInfo, TCard, TLoggedUser, TOffer, TReview, PostCommentInfo } from '../types/types';
import { changeAuthorizationStatus, getCards, setCardsLoadingStatus, setLoggedUserInfo, setNearbyCards, setOfferComments, setOfferInfo, setOfferLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';

export const fetchCards = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('cards/fetchCards',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setCardsLoadingStatus(true));
    const {data} = await api.get<TCard[]>(APIRoute.Cards);
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
      const {data} = await api.get<TLoggedUser>(APIRoute.Login);
      dispatch(setLoggedUserInfo(data));
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
    const {data} = await api.post<TLoggedUser>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setLoggedUserInfo(data));
    dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setLoggedUserInfo(null));
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);

export const getOfferInfoByID = createAsyncThunk<void, string, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('offer/getOfferInfo',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(setOfferLoadingStatus(true));
      const {data} = await api.get<TOffer>(`${APIRoute.Cards}/${id}`);
      dispatch(setOfferLoadingStatus(false));
      dispatch(setOfferInfo(data));
    } catch {
      dispatch(setOfferLoadingStatus(false));
    }
  }
);

export const fetchNearbyCards = createAsyncThunk<void, string, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('offer/fetchNearbyCards',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TCard[]>(`${APIRoute.Cards}/${id}/nearby`);
    dispatch(setNearbyCards(data));
  }
);

export const fetchOfferComments = createAsyncThunk<void, string, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('offer/fetchNearbyCards',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setOfferComments(data));
  }
);

export const postCommentToOffer = createAsyncThunk<void, PostCommentInfo, {
  dispatch: typeof store.dispatch;
  state: StateType;
  extra: AxiosInstance;
}>('offer/fetchNearbyCards',
  async ({id, comment}, {getState, dispatch, extra: api}) => {
    const {data} = await api.post<TReview>(`${APIRoute.Comments}/${id}`, {comment: comment.review, rating: +comment.rating});
    const state = getState();
    dispatch(setOfferComments([...state.offer.comments, data]));
  }
);
