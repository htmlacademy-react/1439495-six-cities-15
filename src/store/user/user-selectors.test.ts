import { NameSpace, AuthorizationStatus } from '../../const';
import { makeFakeUserInfo } from '../../utils/mocks';
import { getAuthorizationStatus, getUserInfo, isLoginError } from './user-selectors';

describe('User selectors', () => {
  const fakeUser = makeFakeUserInfo();
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
      isAuthError: false,
      userInfo: fakeUser,
    }
  };

  it('should return authorization status from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return authorization error status from state', () => {
    const { isAuthError } = state[NameSpace.User];
    const result = isLoginError(state);
    expect(result).toBe(isAuthError);
  });

  it('should return user info from state', () => {
    const { userInfo } = state[NameSpace.User];
    const result = getUserInfo(state);
    expect(result).toEqual(userInfo);
  });
});
