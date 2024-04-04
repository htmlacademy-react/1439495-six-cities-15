import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correct', () => {
    const expectedTestId = 'logo';

    render(<Logo />, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
