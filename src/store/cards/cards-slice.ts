import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortingOptions, TSortOptions } from '../../const';
import { TCard } from '../../types/types';
import { changeFavoriteStatus, fetchCards } from '../api-actions';

type CardsInitialStateType = {
  cards: {
    data: TCard[];
    isLoading: boolean;
    isError: boolean;
  };
  sortOption: TSortOptions;
}

const initialState: CardsInitialStateType = {
  cards: {
    data: [],
    isLoading: false,
    isError: false
  },
  sortOption: SortingOptions.POPULAR,
};

export const cardsSlice = createSlice({
  name: NameSpace.Cards,
  initialState,
  reducers: {
    changeActiveSort: (state, action: PayloadAction<{option: TSortOptions}>) => {
      state.sortOption = action.payload.option;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.cards.isLoading = true;
        state.cards.isError = false;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards.data = action.payload;
        state.cards.isLoading = false;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.cards.isLoading = false;
        state.cards.isError = true;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const index = state.cards.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.cards.data[index].isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export const {changeActiveSort} = cardsSlice.actions;
