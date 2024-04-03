import { State } from '..';
import { CITIES, NameSpace } from '../../const';

export const getCity = (state: Pick<State, NameSpace.City>): typeof CITIES[number] => state[NameSpace.City].city;
