import { render, screen } from '@testing-library/react';
import { PremiumBadgeForCard } from './card';

describe('Component: PremiumBadgeForCard', () => {
  it('should render correct', () => {
    const expectedText = 'Premium';

    render(<PremiumBadgeForCard />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
