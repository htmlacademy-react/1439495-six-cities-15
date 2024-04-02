import { SortingOptions } from '../../const';
import { makeFakeCard } from '../../utils/mocks';
import { fetchCards } from '../api-actions';
import { cardsSlice, changeActiveSort } from './cards-slice';

describe('Cards Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      cards: {
        data: [],
        isLoading: false,
        isError: false
      },
      sortOption: SortingOptions.POPULAR,
    };

    const result = cardsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      cards: {
        data: [],
        isLoading: false,
        isError: false
      },
      sortOption: SortingOptions.POPULAR,
    };

    const result = cardsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change "sortOption" with "changeActiveSort" action', () => {
    const expectedState = {
      cards: {
        data: [],
        isLoading: false,
        isError: false
      },
      sortOption: SortingOptions.PRICE_HIGH_TO_LOW,
    };

    const result = cardsSlice.reducer(undefined, changeActiveSort({option: SortingOptions.PRICE_HIGH_TO_LOW}));

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" and false "isError" with "fetchCards.pending" action', () => {
    const expectedState = {
      cards: {
        data: [],
        isLoading: true,
        isError: false
      },
      sortOption: SortingOptions.POPULAR,
    };

    const result = cardsSlice.reducer(undefined, fetchCards.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "CardsData" and false "isLoading" "isError" with "fetchCards.fulfilled" action', () => {
    const fakeCard = makeFakeCard();
    const expectedState = {
      cards: {
        data: [fakeCard],
        isLoading: false,
        isError: false
      },
      sortOption: SortingOptions.POPULAR,
    };

    const result = cardsSlice.reducer(undefined, fetchCards.fulfilled([fakeCard], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "Error" and false "isLoading" with "fetchCards.rejected" action', () => {
    const expectedState = {
      cards: {
        data: [],
        isLoading: false,
        isError: true
      },
      sortOption: SortingOptions.POPULAR,
    };

    const result = cardsSlice.reducer(undefined, fetchCards.rejected);

    expect(result).toEqual(expectedState);
  });
});
