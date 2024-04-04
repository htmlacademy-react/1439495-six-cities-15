import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import ReviewForm from './review-form';

describe('Component: Review Form', () => {
  it('should render correct', () => {
    const expectedText = 'Submit';
    const { withStoreComponent } = withStore(<ReviewForm />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
