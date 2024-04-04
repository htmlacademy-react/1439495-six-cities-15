import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../utils/mocks';
import ReviewsList, { ReviewItem } from './reviews-list';

describe('Component: Review Item', () => {
  it('should render correct', () => {
    const mockComment = makeFakeComment();
    const expectedTestId = 'review-item';

    render(<ReviewItem review={mockComment} />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});

describe('Component: Review List', () => {
  it('should render correct', () => {
    const mockComments = Array.from({length: 3}, makeFakeComment);
    const expectedTestId = 'review-list';

    render(<ReviewsList reviews={mockComments} />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
