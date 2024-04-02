import { makeFakeCard, makeFakeOfferInfo } from '../../utils/mocks';
import { changeFavoriteStatus, fetchFavoriteCards } from '../api-actions';
import { favoriteCardsSlice } from './favorite-cards-slice';

const IS_FAVORITE = true;

describe('Favorite Cards Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favoriteCards: {
        data: [],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: false
      },
    };

    const result = favoriteCardsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favoriteCards: {
        data: [],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: false
      },
    };

    const result = favoriteCardsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" with "fetchFavoriteCards.pending" action', () => {
    const expectedState = {
      favoriteCards: {
        data: [],
        isLoading: true,
        isError: false,
        isLoadingChangeStatus: false
      },
    };

    const result = favoriteCardsSlice.reducer(undefined, fetchFavoriteCards.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "favoriteCardsData" with "fetchFavoriteCards.fulfilled" action', () => {
    const fakeFavoriteCard = makeFakeCard();
    const expectedState = {
      favoriteCards: {
        data: [fakeFavoriteCard],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: false
      },
    };

    const result = favoriteCardsSlice.reducer(undefined, fetchFavoriteCards.fulfilled([fakeFavoriteCard], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isError" with "fetchFavoriteCards.rejected" action', () => {
    const expectedState = {
      favoriteCards: {
        data: [],
        isLoading: false,
        isError: true,
        isLoadingChangeStatus: false
      },
    };

    const result = favoriteCardsSlice.reducer(undefined, fetchFavoriteCards.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoadingChangeStatus" with "changeFavoriteStatus.pending" action', () => {
    const expectedState = {
      favoriteCards: {
        data: [],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: true
      },
    };

    const result = favoriteCardsSlice.reducer(undefined, changeFavoriteStatus.pending);

    expect(result).toEqual(expectedState);
  });

  it('should add favorite to "favoriteCardsData" with "changeFavoriteStatus.fulfilled" action', () => {
    const fakeFavoriteCard = makeFakeOfferInfo(IS_FAVORITE);
    const expectedState = {
      favoriteCards: {
        data: [fakeFavoriteCard],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: false
      },
    };

    const result = favoriteCardsSlice.reducer(undefined, changeFavoriteStatus.fulfilled(fakeFavoriteCard, '', {offerId: fakeFavoriteCard.id, status: 1}));

    expect(result).toEqual(expectedState);
  });

  it('should delete favorite card from "favoriteCardsData" with "changeFavoriteStatus.fulfilled" action', () => {
    const fakeFavoriteCard = makeFakeOfferInfo();
    const initialState = {
      favoriteCards: {
        data: [fakeFavoriteCard],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: false
      },
    };
    const expectedState = {
      favoriteCards: {
        data: [],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: false
      },
    };

    const result = favoriteCardsSlice.reducer(initialState, changeFavoriteStatus.fulfilled(fakeFavoriteCard, '', {offerId: fakeFavoriteCard.id, status: 0}));

    expect(result).toEqual(expectedState);
  });
});
