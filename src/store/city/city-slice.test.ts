import { CITIES } from '../../const';
import { changeCity, citySlice } from './city-slice';

describe('City Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: CITIES[2]
    };

    const result = citySlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: CITIES[0]
    };

    const result = citySlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change "city" with "changeCity" action', () => {
    const expectedState = {
      city: CITIES[2]
    };

    const result = citySlice.reducer(undefined, changeCity({city: CITIES[2]}));

    expect(result).toEqual(expectedState);
  });
});
