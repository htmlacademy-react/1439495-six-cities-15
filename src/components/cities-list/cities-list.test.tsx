import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CitiesList from './cities-list';
import { CITIES } from '../../const';
import { withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: Cities List', () => {
  it('should render correct', () => {
    const expectedTestId = 'cities-list';
    const { withStoreComponent } = withStore(<CitiesList activeCity={CITIES[0].name} />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
