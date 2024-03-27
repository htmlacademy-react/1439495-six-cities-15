import { State } from '..';
import { CITIES, NameSpace } from '../../const';

export const getCity = (state: State): typeof CITIES[number] => state[NameSpace.City].city;
