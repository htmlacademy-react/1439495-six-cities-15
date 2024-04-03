import { State } from '..';
import { AuthorizationStatus, NameSpace } from '../../const';
import { TLoggedUser } from '../../types/types';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: Pick<State, NameSpace.User>): TLoggedUser | null => state[NameSpace.User].userInfo;
export const isLoginError = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isAuthError;
