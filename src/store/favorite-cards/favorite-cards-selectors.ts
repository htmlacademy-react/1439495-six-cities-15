import { State } from '..';
import { NameSpace } from '../../const';
import { TCard } from '../../types/types';

export const getFavoriteCards = (state: Pick<State, NameSpace.Favorite>): TCard[] => state[NameSpace.Favorite].favoriteCards.data;
export const getFavoriteCardsLoadingStatus = (state: Pick<State, NameSpace.Favorite>): boolean => state[NameSpace.Favorite].favoriteCards.isLoading;
export const getFavoriteCardsErrorStatus = (state: Pick<State, NameSpace.Favorite>): boolean => state[NameSpace.Favorite].favoriteCards.isError;
export const getChangeFavoriteLoadingStatus = (state: Pick<State, NameSpace.Favorite>): boolean => state[NameSpace.Favorite].favoriteCards.isLoadingChangeStatus;
