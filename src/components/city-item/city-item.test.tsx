import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { CITIES } from '../../const';
import { withStore } from '../../utils/mock-component';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import CityItem from './city-item';
import { changeCity } from '../../store/city/city-slice';

describe('Component: City Item', () => {
  it('should render correct', () => {
    const expectedText = CITIES[1].name;
    const { withStoreComponent } = withStore(<CityItem city={CITIES[1].name} />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should dispatch "changeCity" when user clicked on city', async () => {
    const testCityName = CITIES[1].name;
    const { withStoreComponent, mockStore } = withStore(<CityItem city={testCityName} />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});
    await userEvent.click(screen.getByText(testCityName));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      changeCity.type
    ]);
  });
});
