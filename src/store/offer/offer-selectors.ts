import { State } from '..';
import { NameSpace } from '../../const';
import { TCard, TOffer, TReview } from '../../types/types';

export const getOfferInfo = (state: Pick<State, NameSpace.Offer>): TOffer | null => state[NameSpace.Offer].offer.offerInfo;
export const getNearbyCards = (state: Pick<State, NameSpace.Offer>): TCard[] => state[NameSpace.Offer].offer.nearbyCards;
export const getOfferComments = (state: Pick<State, NameSpace.Offer>): TReview[] => state[NameSpace.Offer].offer.comments;
export const getOfferLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].offer.isLoading;
export const getOfferErrorStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].offer.isError;
export const getPostReviewErrorStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].offer.isPostReviewError;
export const getPostReviewLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].offer.isPostCommentLoading;
