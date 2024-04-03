import { State } from '..';
import { NameSpace, TSortOptions } from '../../const';
import { TCard } from '../../types/types';

export const getCards = (state: Pick<State, NameSpace.Cards>): TCard[] => state[NameSpace.Cards].cards.data;
export const getActiveSort = (state: Pick<State, NameSpace.Cards>): TSortOptions => state[NameSpace.Cards].sortOption;
export const getCardsLoadingStatus = (state: Pick<State, NameSpace.Cards>): boolean => state[NameSpace.Cards].cards.isLoading;
export const getCardsErrorStatus = (state: Pick<State, NameSpace.Cards>): boolean => state[NameSpace.Cards].cards.isError;
