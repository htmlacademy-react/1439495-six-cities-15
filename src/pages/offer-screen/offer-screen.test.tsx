import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { makeFakeCard, makeFakeComment, makeFakeOfferInfo, makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import OfferScreen from './offer-screen';


describe('Component: Offer Screen', () => {
  it('should render correct', () => {
    const expectedText = 'Other places in the neighbourhood';
    const { withStoreComponent } = withStore(<OfferScreen />, makeFakeStore({
      OFFER: {
        offer: {
          offerInfo: makeFakeOfferInfo(),
          nearbyCards: [makeFakeCard()],
          comments: [makeFakeComment()],
          isLoading: false,
          isError: false,
          isPostReviewError: false,
          isPostCommentLoading: false
        }
      }
    }));

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
