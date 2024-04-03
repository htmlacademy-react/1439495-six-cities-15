import { NameSpace } from '../../const';
import { makeFakeCard, makeFakeComment, makeFakeOfferInfo } from '../../utils/mocks';
import { getNearbyCards, getOfferComments, getOfferErrorStatus, getOfferInfo, getOfferLoadingStatus, getPostReviewErrorStatus, getPostReviewLoadingStatus } from './offer-selectors';

describe('Offer selectors', () => {
  const fakeOffer = makeFakeOfferInfo();
  const fakeNearbyCard = makeFakeCard();
  const fakeComment = makeFakeComment();
  const state = {
    [NameSpace.Offer]: {
      offer: {
        offerInfo: fakeOffer,
        nearbyCards: [fakeNearbyCard],
        comments: [fakeComment],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    }
  };

  it('should return offer info from state', () => {
    const { offerInfo } = state[NameSpace.Offer].offer;
    const result = getOfferInfo(state);
    expect(result).toEqual(offerInfo);
  });

  it('should return nearbyCards from state', () => {
    const { nearbyCards } = state[NameSpace.Offer].offer;
    const result = getNearbyCards(state);
    expect(result).toEqual(nearbyCards);
  });

  it('should return comments from state', () => {
    const { comments } = state[NameSpace.Offer].offer;
    const result = getOfferComments(state);
    expect(result).toEqual(comments);
  });

  it('should return offer loading status from state', () => {
    const { isLoading } = state[NameSpace.Offer].offer;
    const result = getOfferLoadingStatus(state);
    expect(result).toBe(isLoading);
  });

  it('should return offer error status from state', () => {
    const { isError } = state[NameSpace.Offer].offer;
    const result = getOfferErrorStatus(state);
    expect(result).toBe(isError);
  });

  it('should return post review error status from state', () => {
    const { isPostReviewError } = state[NameSpace.Offer].offer;
    const result = getPostReviewErrorStatus(state);
    expect(result).toBe(isPostReviewError);
  });

  it('should return post review loading status from state', () => {
    const { isPostCommentLoading } = state[NameSpace.Offer].offer;
    const result = getPostReviewLoadingStatus(state);
    expect(result).toBe(isPostCommentLoading);
  });
});
