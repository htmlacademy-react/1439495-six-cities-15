import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { makeFakeCard, makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import MainScreen from './main-screen';
import { SortingOptions } from '../../const';

describe('Component: Main Screen', () => {
  it('should render correct', () => {
    const expectedTestId = 'main-screen';
    const { withStoreComponent } = withStore(<MainScreen />, makeFakeStore({
      CARDS: {
        cards: {
          data: [makeFakeCard()],
          isLoading: false,
          isError: false
        },
        sortOption: SortingOptions.POPULAR
      }
    }));

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
