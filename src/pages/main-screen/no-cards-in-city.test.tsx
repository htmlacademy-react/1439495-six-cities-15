import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import NoCardsInCity from './no-cards-in-city';

describe('Component: No cards in city', () => {
  it('should render correct', () => {
    const expectedText = 'No places to stay available';
    const { withStoreComponent } = withStore(<NoCardsInCity />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
