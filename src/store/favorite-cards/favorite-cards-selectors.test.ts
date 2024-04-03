import { NameSpace } from '../../const';
import { makeFakeOfferInfo } from '../../utils/mocks';
import { getChangeFavoriteLoadingStatus, getFavoriteCards, getFavoriteCardsErrorStatus, getFavoriteCardsLoadingStatus } from './favorite-cards-selectors';

const IS_FAVORITE = true;

describe('Favorite cards selectors', () => {
  const fakeFavoriteCard = makeFakeOfferInfo(IS_FAVORITE);
  const state = {
    [NameSpace.Favorite]: {
      favoriteCards: {
        data: [fakeFavoriteCard],
        isLoading: false,
        isError: false,
        isLoadingChangeStatus: false
      },
    }
  };

  it('should return favorite cards data from state', () => {
    const { data } = state[NameSpace.Favorite].favoriteCards;
    const result = getFavoriteCards(state);
    expect(result).toEqual(data);
  });

  it('should return loading favorite cards status from state', () => {
    const { isLoading } = state[NameSpace.Favorite].favoriteCards;
    const result = getFavoriteCardsLoadingStatus(state);
    expect(result).toBe(isLoading);
  });

  it('should return error status from state', () => {
    const { isError } = state[NameSpace.Favorite].favoriteCards;
    const result = getFavoriteCardsErrorStatus(state);
    expect(result).toBe(isError);
  });

  it('should return change favorite loading status from state', () => {
    const { isLoadingChangeStatus } = state[NameSpace.Favorite].favoriteCards;
    const result = getChangeFavoriteLoadingStatus(state);
    expect(result).toBe(isLoadingChangeStatus);
  });
});
