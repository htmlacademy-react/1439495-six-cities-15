import { createSlice } from '@reduxjs/toolkit';
import { TCard, TOffer } from '../../types/types';
import { NameSpace } from '../../const';
import { changeFavoriteStatus, fetchFavoriteCards } from '../api-actions';


type FavoriteCardsInitialStateType = {
  favoriteCards: {
    data: Array<TCard | TOffer>;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: FavoriteCardsInitialStateType = {
  favoriteCards: {
    data: [],
    isLoading: false,
    isError: false
  },
};

export const favoriteCardsSlice = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteCards.pending, (state) => {
        state.favoriteCards.isLoading = true;
        state.favoriteCards.isError = false;
      })
      .addCase(fetchFavoriteCards.fulfilled, (state, action) => {
        state.favoriteCards.data = action.payload;
        state.favoriteCards.isLoading = false;
      })
      .addCase(fetchFavoriteCards.rejected, (state) => {
        state.favoriteCards.isLoading = false;
        state.favoriteCards.isError = true;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteCards.data.push(action.payload);
        } else {
          state.favoriteCards.data = state.favoriteCards.data.filter((item) => item.id !== action.payload.id);
        }
      });
  }
});
