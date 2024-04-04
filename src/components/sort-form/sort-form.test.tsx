import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import SortForm from './sort-form';

describe('Component: Sort Form', () => {
  it('should render correct', () => {
    const expectedText = 'Sort by';
    const { withStoreComponent } = withStore(<SortForm />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
