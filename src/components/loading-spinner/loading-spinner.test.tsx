import { render, screen } from '@testing-library/react';
import LoadingSpinner from './loading-spinner';

describe('Component: Loading spinner', () => {
  it('should render correct', () => {
    const testidInfo = 'loading-spinner';

    render(<LoadingSpinner />);

    expect(screen.getByTestId(testidInfo)).toBeInTheDocument();
  });
});
