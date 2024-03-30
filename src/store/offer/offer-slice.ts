import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TCard, TOffer, TReview } from '../../types/types';
import { changeFavoriteStatus, fetchNearbyCards, fetchOfferComments, getOfferInfoByID, postCommentToOffer } from '../api-actions';
import { toast } from 'react-toastify';

type OfferInitialStateType = {
  offer: {
    offerInfo: TOffer | null;
    nearbyCards: TCard[];
    comments: TReview[];
    isLoading: boolean;
    isError: boolean;
    isPostReviewError: boolean;
    isPostCommentLoading: boolean;
  };
}

const initialState: OfferInitialStateType = {
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
      .addCase(postCommentToOffer.pending, (state) => {
        state.offer.isPostReviewError = false;
        state.offer.isPostCommentLoading = true;
      })
      .addCase(postCommentToOffer.fulfilled, (state, action) => {
        state.offer.isPostCommentLoading = false;
        state.offer.comments.push(action.payload);
      })
      .addCase(postCommentToOffer.rejected, (state) => {
        state.offer.isPostReviewError = true;
        state.offer.isPostCommentLoading = false;
        toast.error('Не удалось отправить отзыв');
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        if (state.offer.offerInfo && state.offer.offerInfo.id === action.payload.id) {
          state.offer.offerInfo.isFavorite = action.payload.isFavorite;
        }
      });
  }
});
