import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES, NameSpace } from '../../const';

type CityInitialStateType = {
  city: typeof CITIES[number];
}

const initialState: CityInitialStateType = {
  city: CITIES[0]
};

export const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: typeof CITIES[number]}>) => {
      state.city = action.payload.city;
    }
  }
});

export const {changeCity} = citySlice.actions;
