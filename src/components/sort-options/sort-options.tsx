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

export const OptionItem = memo(({name}: OptionItemProps): JSX.Element => {
  const activeSort = useAppSelector(getActiveSort);
  const dispatch = useAppDispatch();

  const handleSortClick = () => {
    dispatch(changeActiveSort({option: name}));
  };

  return (
    <li className={`places__option ${activeSort === name && 'places__option--active'}`} tabIndex={0} onClick={handleSortClick}>{name}</li>
  );
});

OptionItem.displayName = 'OptionItem';

const SortOptions = memo(({isOpenForm}: SortOptionsProps): JSX.Element => (
  <ul className={`places__options places__options--custom ${isOpenForm && 'places__options--opened'}`} data-testid='sort-options'>
    {Object.values(SortingOptions).map((name) => <OptionItem name={name} key={name} />)}
  </ul>
));

SortOptions.displayName = 'SortOptions';

export default SortOptions;
