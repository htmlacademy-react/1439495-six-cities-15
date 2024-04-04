import { memo } from 'react';
import { SortingOptions, TSortOptions } from '../../const.ts';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks.ts';
import { getActiveSort } from '../../store/cards/cards-selectors.ts';
import { changeActiveSort } from '../../store/cards/cards-slice.ts';

type OptionItemProps = {
  name: TSortOptions;
}

type SortOptionsProps = {
  isOpenForm: boolean;
}

// eslint-disable-next-line prefer-arrow-callback
export const OptionItem = memo(function OptionItem({name}: OptionItemProps): JSX.Element {
  const activeSort = useAppSelector(getActiveSort);
  const dispatch = useAppDispatch();

  const handleSortClick = () => {
    dispatch(changeActiveSort({option: name}));
  };

  return (
    <li className={`places__option ${activeSort === name && 'places__option--active'}`} tabIndex={0} onClick={handleSortClick}>{name}</li>
  );
});

// eslint-disable-next-line prefer-arrow-callback
const SortOptions = memo(function SortOptions({isOpenForm}: SortOptionsProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom ${isOpenForm && 'places__options--opened'}`} data-testid='sort-options'>
      {Object.values(SortingOptions).map((name) => <OptionItem name={name} key={name} />)}
    </ul>
  );
});

export default SortOptions;
