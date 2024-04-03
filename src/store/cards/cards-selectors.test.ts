import { NameSpace, SortingOptions } from '../../const';
import { makeFakeCard } from '../../utils/mocks';
import { getActiveSort, getCards, getCardsErrorStatus, getCardsLoadingStatus } from './cards-selectors';

describe('Cards selectors', () => {
  const fakeCard = makeFakeCard();
  const state = {
    [NameSpace.Cards]: {
      cards: {
        data: [fakeCard],
        isLoading: false,
        isError: false
      },
      sortOption: SortingOptions.POPULAR,
    }
  };

  it('should return cards data from state', () => {
    const cards = state[NameSpace.Cards].cards.data;
    const result = getCards(state);
    expect(result).toEqual(cards);
  });

  it('should return sort option from state', () => {
    const { sortOption } = state[NameSpace.Cards];
    const result = getActiveSort(state);
    expect(result).toBe(sortOption);
  });

  it('should return loading status from state', () => {
    const { isLoading } = state[NameSpace.Cards].cards;
    const result = getCardsLoadingStatus(state);
    expect(result).toBe(isLoading);
  });

  it('should return error status from state', () => {
    const { isError } = state[NameSpace.Cards].cards;
    const result = getCardsErrorStatus(state);
    expect(result).toBe(isError);
  });
});
