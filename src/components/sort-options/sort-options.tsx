import { SortingOptions, TSortOptions } from '../../const.ts';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks.ts';
import { changeActiveSort } from '../../store/action.ts';

type OptionItemProps = {
  name: TSortOptions;
}

type SortOptionsProps = {
  isOpenForm: boolean;
}

function OptionItem({name}: OptionItemProps): JSX.Element {
  const activeSort = useAppSelector((state) => state.sortOption);
  const dispatch = useAppDispatch();

  const handleSortClick = () => {
    dispatch(changeActiveSort({option: name}));
  };

  return (
    <li className={`places__option ${activeSort === name && 'places__option--active'}`} tabIndex={0} onClick={handleSortClick}>{name}</li>
  );
}

function SortOptions({isOpenForm}: SortOptionsProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom ${isOpenForm && 'places__options--opened'}`}>
      {Object.values(SortingOptions).map((name) => <OptionItem name={name} key={name} />)}
    </ul>
  );
}

export default SortOptions;
