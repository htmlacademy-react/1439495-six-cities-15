import { State } from '..';
import { NameSpace } from '../../const';
import { TCard } from '../../types/types';

export const getFavoriteCards = (state: State): TCard[] => state[NameSpace.Favorite].favoriteCards.data;
export const getFavoriteCardsLoadingStatus = (state: State): boolean => state[NameSpace.Favorite].favoriteCards.isLoading;
export const getFavoriteCardsErrorStatus = (state: State): boolean => state[NameSpace.Favorite].favoriteCards.isError;
export const getChangeFavoriteLoadingStatus = (state: State): boolean => state[NameSpace.Favorite].favoriteCards.isLoadingChangeStatus;
