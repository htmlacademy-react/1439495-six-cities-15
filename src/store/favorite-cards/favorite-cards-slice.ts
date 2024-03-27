import { createSlice } from '@reduxjs/toolkit';
import { TCard } from '../../types/types';
import { NameSpace } from '../../const';
import { fetchFavoriteCards } from '../api-actions';


type FavoriteCardsInitialStateType = {
  favoriteCards: {
    data: TCard[];
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
      });
  }
});
