import { State } from '..';
import { NameSpace } from '../../const';
import { TCard, TOffer, TReview } from '../../types/types';

export const getOfferInfo = (state: State): TOffer | null => state[NameSpace.Offer].offer.offerInfo;
export const getNearbyCards = (state: State): TCard[] => state[NameSpace.Offer].offer.nearbyCards;
export const getOfferComments = (state: State): TReview[] => state[NameSpace.Offer].offer.comments;
export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offer].offer.isLoading;
export const getOfferErrorStatus = (state: State): boolean => state[NameSpace.Offer].offer.isError;
export const getPostReviewErrorStatus = (state: State): boolean => state[NameSpace.Offer].offer.isPostReviewError;
export const getPostReviewLoadingStatus = (state: State): boolean => state[NameSpace.Offer].offer.isPostCommentLoading;
