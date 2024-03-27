import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TCard, TOffer, TReview } from '../../types/types';
import { fetchNearbyCards, fetchOfferComments, getOfferInfoByID, postCommentToOffer } from '../api-actions';

type OfferInitialStateType = {
  offer: {
    offerInfo: TOffer | null;
    nearbyCards: TCard[];
    comments: TReview[];
    isLoading: boolean;
    isError: boolean;
    isPostReviewError: boolean;
  };
}

const initialState: OfferInitialStateType = {
  offer: {
    offerInfo: null,
    nearbyCards: [],
    comments: [],
    isLoading: false,
    isError: false,
    isPostReviewError: false
  }
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOfferInfoByID.pending, (state) => {
        state.offer.isLoading = true;
        state.offer.isError = false;
      })
      .addCase(getOfferInfoByID.fulfilled, (state, action) => {
        state.offer.isLoading = false;
        state.offer.offerInfo = action.payload;
      })
      .addCase(getOfferInfoByID.rejected, (state) => {
        state.offer.isLoading = false;
        state.offer.isError = true;
      })
      .addCase(fetchNearbyCards.fulfilled, (state, action) => {
        state.offer.nearbyCards = action.payload;
      })
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        state.offer.comments = action.payload;
      })
      .addCase(postCommentToOffer.fulfilled, (state, action) => {
        state.offer.isPostReviewError = false;
        state.offer.comments.push(action.payload);
      })
      .addCase(postCommentToOffer.rejected, (state) => {
        state.offer.isPostReviewError = true;
      });
  }
});
