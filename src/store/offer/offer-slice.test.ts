import { makeFakeCard, makeFakeComment, makeFakeOfferInfo } from '../../utils/mocks';
import { fetchNearbyCards, fetchOfferComments, getOfferInfoByID, postCommentToOffer } from '../api-actions';
import { offerSlice } from './offer-slice';


describe('Offer Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" with "getOfferInfoByID.pending" action', () => {
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [],
        isLoading: true,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, getOfferInfoByID.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offerInfo" with "getOfferInfoByID.fulfilled" action', () => {
    const fakeOfferInfo = makeFakeOfferInfo();
    const expectedState = {
      offer: {
        offerInfo: fakeOfferInfo,
        nearbyCards: [],
        comments: [],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, getOfferInfoByID.fulfilled(fakeOfferInfo, '', fakeOfferInfo.id));

    expect(result).toEqual(expectedState);
  });

  it('should set "isError" with "getOfferInfoByID.rejected" action', () => {
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [],
        isLoading: false,
        isError: true,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, getOfferInfoByID.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearbyCards" with "fetchNearbyCards.fulfilled" action', () => {
    const fakeNearbyCard = makeFakeCard();
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [fakeNearbyCard],
        comments: [],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, fetchNearbyCards.fulfilled([fakeNearbyCard], '', 'someId'));

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" with "fetchOfferComments.fulfilled" action', () => {
    const fakeComment = makeFakeComment();
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [fakeComment],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, fetchOfferComments.fulfilled([fakeComment], '', 'someId'));

    expect(result).toEqual(expectedState);
  });

  it('should set "isPostCommentLoading" with "postCommentToOffer.pending" action', () => {
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: true
      }
    };

    const result = offerSlice.reducer(undefined, postCommentToOffer.pending);

    expect(result).toEqual(expectedState);
  });

  it('should change "comments" with "postCommentToOffer.fulfilled" action', () => {
    const fakeComment = makeFakeComment();
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [fakeComment],
        isLoading: false,
        isError: false,
        isPostReviewError: false,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, postCommentToOffer.fulfilled(fakeComment, '', {id: fakeComment.id, comment: {rating: fakeComment.rating.toString(), review: fakeComment.comment}}));

    expect(result).toEqual(expectedState);
  });

  it('should set "isPostReviewError" with "postCommentToOffer.rejected" action', () => {
    const expectedState = {
      offer: {
        offerInfo: null,
        nearbyCards: [],
        comments: [],
        isLoading: false,
        isError: false,
        isPostReviewError: true,
        isPostCommentLoading: false
      }
    };

    const result = offerSlice.reducer(undefined, postCommentToOffer.rejected);

    expect(result).toEqual(expectedState);
  });
});
