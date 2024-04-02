import { AuthorizationStatus } from '../../const';
import { makeFakeUserInfo } from '../../utils/mocks';
import { userSlice } from './user-slice';
import { checkAuthStatus, loginAction, logoutAction } from '../api-actions';

describe('User Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      isAuthError: false,
      userInfo: null,
    };

    const result = userSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      isAuthError: false,
      userInfo: null,
    };

    const result = userSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" and "UserInfo" with "checkAuthStatus.fulfilled" action', () => {
    const fakeUserInfo = makeFakeUserInfo();
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      isAuthError: false,
      userInfo: fakeUserInfo,
    };

    const result = userSlice.reducer(undefined, checkAuthStatus.fulfilled(fakeUserInfo, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthStatus.rejected" action', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      isAuthError: false,
      userInfo: null,
    };

    const result = userSlice.reducer(undefined, checkAuthStatus.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" and "UserInfo" and "False Error" with "loginAction.fulfilled" action', () => {
    const fakeUserInfo = makeFakeUserInfo();
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      isAuthError: false,
      userInfo: fakeUserInfo,
    };

    const result = userSlice.reducer(undefined, loginAction.fulfilled(fakeUserInfo, '', {email: 'rs@rtss.ru', password: 'dfg4'}));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" and "Error" with "loginAction.rejected" action', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      isAuthError: true,
      userInfo: null,
    };

    const result = userSlice.reducer(undefined, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" and null "UserInfo" with "logoutAction.fulfilled" action', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      isAuthError: false,
      userInfo: null,
    };

    const result = userSlice.reducer(undefined, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
