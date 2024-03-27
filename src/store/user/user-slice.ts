import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { TLoggedUser } from '../../types/types';
import { checkAuthStatus, loginAction, logoutAction } from '../api-actions';

type UsersInitialStateType = {
  authorizationStatus: AuthorizationStatus;
  isAuthError: boolean;
  userInfo: TLoggedUser | null;
}

const initialState: UsersInitialStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthError: false,
  userInfo: null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isAuthError = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isAuthError = true;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
