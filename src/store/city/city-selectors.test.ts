import { CITIES, NameSpace } from '../../const';
import { getCity } from './city-selectors';


describe('City selectors', () => {
  const state = {
    [NameSpace.City]: {
      city: CITIES[1]
    }
  };

  it('should return city from state', () => {
    const { city } = state[NameSpace.City];
    const result = getCity(state);
    expect(result).toEqual(city);
  });
});
