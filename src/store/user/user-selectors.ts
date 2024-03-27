import { State } from '..';
import { AuthorizationStatus, NameSpace } from '../../const';
import { TLoggedUser } from '../../types/types';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): TLoggedUser | null => state[NameSpace.User].userInfo;
export const isLoginError = (state: State): boolean => state[NameSpace.User].isAuthError;
