import { State } from '..';
import { NameSpace, TSortOptions } from '../../const';
import { TCard } from '../../types/types';

export const getCards = (state: State): TCard[] => state[NameSpace.Cards].cards.data;
export const getActiveSort = (state: State): TSortOptions => state[NameSpace.Cards].sortOption;
export const getCardsLoadingStatus = (state: State): boolean => state[NameSpace.Cards].cards.isLoading;
export const getCardsErrorStatus = (state: State): boolean => state[NameSpace.Cards].cards.isError;
