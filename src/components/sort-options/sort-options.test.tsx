import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import SortOptions, { OptionItem } from './sort-options';
import { SortingOptions } from '../../const';
import { changeActiveSort } from '../../store/cards/cards-slice';

describe('Component: Option Item', () => {
  it('should render correct', () => {
    const expectedText = SortingOptions.POPULAR;
    const { withStoreComponent } = withStore(<OptionItem name={SortingOptions.POPULAR} />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should dispatch "changeActiveSort" when user change sort', async () => {
    const { withStoreComponent, mockStore } = withStore(<OptionItem name={SortingOptions.POPULAR} />, makeFakeStore());

    render(withStoreComponent);
    await userEvent.click(screen.getByText(SortingOptions.POPULAR));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      changeActiveSort.type
    ]);

  });
});

describe('Component: Sort Options', () => {
  it('should render correct', () => {
    const expectedTestId = 'sort-options';
    const { withStoreComponent } = withStore(<SortOptions isOpenForm />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
