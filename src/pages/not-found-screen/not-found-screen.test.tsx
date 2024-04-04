import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundScreen from './not-found-screen';

describe('Component: Not Found Screen', () => {
  it('should render correct', () => {
    const expectedText = 'PAGE NOT FOUND';

    render(<NotFoundScreen />, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
