import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '.';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes, makeFakeCard, makeFakeComment, makeFakeOfferInfo, makeFakeUserInfo } from '../utils/mocks';
import { APIRoute } from '../const';
import { changeFavoriteStatus, checkAuthStatus, fetchCards, fetchFavoriteCards, fetchNearbyCards, fetchOfferComments, getOfferInfoByID, loginAction, logoutAction, postCommentToOffer } from './api-actions';


describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      CARDS: {
        cards: {
          data: []
        }
      }});
  });

  describe('fetchCards', () => {
    it('should dispatch "fetchCards.pending" and "fetchCards.fulfilled" when server response 200', async () => {
      const mockCards = Array.from({length: 3}, makeFakeCard);
      mockAxiosAdapter.onGet(APIRoute.Cards).reply(200, mockCards);

      await store.dispatch(fetchCards());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCardsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCards.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCards.pending.type,
        fetchCards.fulfilled.type,
      ]);

      expect(fetchCardsFulfilled.payload)
        .toEqual(mockCards);
    });

    it('should dispatch "fetchCards.pending" and "fetchCards.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Cards).reply(400, []);

      await store.dispatch(fetchCards());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCards.pending.type,
        fetchCards.rejected.type,
      ]);
    });
  });

  describe('checkAuthStatus', () => {
    it('should dispatch "checkAuthStatus.pending" and "checkAuthStatus.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthStatus());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthStatus.pending" and "checkAuthStatus.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(401);

      await store.dispatch(checkAuthStatus());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    const mockAuthInfo = {
      email: '123@test.ru',
      password: 'asd1'
    };

    it('should dispatch "loginAction.pending" and "loginAction.fulfilled" when server response 200', async () => {
      const mockUser = makeFakeUserInfo();
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, mockUser);

      await store.dispatch(loginAction(mockAuthInfo));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const loginActionFulfilled = emittedActions.at(1) as ReturnType<typeof loginAction.fulfilled>;

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type,
      ]);
      expect(loginActionFulfilled.payload)
        .toEqual(mockUser);
    });

    it('should dispatch "loginAction.pending" and "loginAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(400);

      await store.dispatch(loginAction(mockAuthInfo));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending" and "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });
  });

  describe('getOfferInfoByID', () => {
    const mockOfferInfo = makeFakeOfferInfo();
    it('should dispatch "getOfferInfoByID.pending" and "getOfferInfoByID.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Cards}/${mockOfferInfo.id}`).reply(200, mockOfferInfo);

      await store.dispatch(getOfferInfoByID(mockOfferInfo.id));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const getOfferInfoByIDFulfilled = emittedActions.at(1) as ReturnType<typeof getOfferInfoByID.fulfilled>;

      expect(actions).toEqual([
        getOfferInfoByID.pending.type,
        getOfferInfoByID.fulfilled.type,
      ]);
      expect(getOfferInfoByIDFulfilled.payload)
        .toEqual(mockOfferInfo);
    });

    it('should dispatch "getOfferInfoByID.pending" and "getOfferInfoByID.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Cards}/${mockOfferInfo.id}`).reply(404);

      await store.dispatch(getOfferInfoByID(mockOfferInfo.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getOfferInfoByID.pending.type,
        getOfferInfoByID.rejected.type,
      ]);
    });
  });

  describe('fetchNearbyCards', () => {
    const mockOfferInfo = makeFakeOfferInfo();
    it('should dispatch "fetchNearbyCards.pending" and "fetchNearbyCards.fulfilled" when server response 200', async () => {
      const mockNearbyCards = Array.from({length: 3}, makeFakeCard);
      mockAxiosAdapter.onGet(`${APIRoute.Cards}/${mockOfferInfo.id}/nearby`).reply(200, mockNearbyCards);

      await store.dispatch(fetchNearbyCards(mockOfferInfo.id));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchNearbyCardsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearbyCards.fulfilled>;

      expect(actions).toEqual([
        fetchNearbyCards.pending.type,
        fetchNearbyCards.fulfilled.type,
      ]);
      expect(fetchNearbyCardsFulfilled.payload)
        .toEqual(mockNearbyCards);
    });

    it('should dispatch "fetchNearbyCards.pending" and "fetchNearbyCards.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Cards}/${mockOfferInfo.id}/nearby`).reply(404, []);

      await store.dispatch(fetchNearbyCards(mockOfferInfo.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyCards.pending.type,
        fetchNearbyCards.rejected.type,
      ]);
    });
  });

  describe('fetchOfferComments', () => {
    const mockOfferInfo = makeFakeOfferInfo();
    it('should dispatch "fetchOfferComments.pending" and "fetchOfferComments.fulfilled" when server response 200', async () => {
      const mockComments = Array.from({length: 3}, makeFakeComment);
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockOfferInfo.id}`).reply(200, mockComments);

      await store.dispatch(fetchOfferComments(mockOfferInfo.id));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchOfferCommentsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferComments.fulfilled>;

      expect(actions).toEqual([
        fetchOfferComments.pending.type,
        fetchOfferComments.fulfilled.type,
      ]);
      expect(fetchOfferCommentsFulfilled.payload)
        .toEqual(mockComments);
    });

    it('should dispatch "fetchOfferComments.pending" and "fetchOfferComments.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockOfferInfo.id}`).reply(404);

      await store.dispatch(fetchOfferComments(mockOfferInfo.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferComments.pending.type,
        fetchOfferComments.rejected.type,
      ]);
    });
  });

  describe('postCommentToOffer', () => {
    const mockOfferInfo = makeFakeOfferInfo();
    const mockComment = makeFakeComment();
    it('should dispatch "postCommentToOffer.pending" and "postCommentToOffer.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockOfferInfo.id}`).reply(200, mockComment);

      await store.dispatch(postCommentToOffer({id: mockOfferInfo.id, comment: {rating: mockComment.rating.toString(), review: mockComment.comment}}));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const postCommentToOfferFulfilled = emittedActions.at(1) as ReturnType<typeof postCommentToOffer.fulfilled>;

      expect(actions).toEqual([
        postCommentToOffer.pending.type,
        postCommentToOffer.fulfilled.type,
      ]);
      expect(postCommentToOfferFulfilled.payload)
        .toEqual(mockComment);
    });

    it('should dispatch "postCommentToOffer.pending" and "postCommentToOffer.rejected" when server response 404', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockOfferInfo.id}`).reply(404);

      await store.dispatch(postCommentToOffer({id: mockOfferInfo.id, comment: {rating: mockComment.rating.toString(), review: mockComment.comment}}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCommentToOffer.pending.type,
        postCommentToOffer.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteCards', () => {
    it('should dispatch "fetchFavoriteCards.pending" and "fetchFavoriteCards.fulfilled" when server response 200', async () => {
      const mockFavoriteCards = Array.from({length: 3}, makeFakeCard);
      mockAxiosAdapter.onGet(APIRoute.FavoriteCards).reply(200, mockFavoriteCards);

      await store.dispatch(fetchFavoriteCards());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteCardsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteCards.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteCards.pending.type,
        fetchFavoriteCards.fulfilled.type,
      ]);

      expect(fetchFavoriteCardsFulfilled.payload)
        .toEqual(mockFavoriteCards);
    });

    it('should dispatch "fetchFavoriteCards.pending" and "fetchFavoriteCards.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet(APIRoute.FavoriteCards).reply(400, []);

      await store.dispatch(fetchFavoriteCards());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteCards.pending.type,
        fetchFavoriteCards.rejected.type,
      ]);
    });
  });

  describe('changeFavoriteStatus', () => {
    const mockOffer = makeFakeOfferInfo();
    it('should dispatch "changeFavoriteStatus.pending" and "changeFavoriteStatus.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.FavoriteCards}/${mockOffer.id}/0`).reply(200, mockOffer);

      await store.dispatch(changeFavoriteStatus({offerId: mockOffer.id, status: 0}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const changeFavoriteStatusFulfilled = emittedActions.at(1) as ReturnType<typeof changeFavoriteStatus.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        changeFavoriteStatus.pending.type,
        changeFavoriteStatus.fulfilled.type,
      ]);

      expect(changeFavoriteStatusFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "changeFavoriteStatus.pending" and "changeFavoriteStatus.rejected" when server response 401', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.FavoriteCards}/${mockOffer.id}/0`).reply(400);

      await store.dispatch(changeFavoriteStatus({offerId: mockOffer.id, status: 0}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavoriteStatus.pending.type,
        changeFavoriteStatus.rejected.type,
      ]);
    });
  });
});
