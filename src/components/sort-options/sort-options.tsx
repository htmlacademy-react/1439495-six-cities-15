import { OPTIONS } from '../../const.ts';

type OptionItemProps = {
  name: typeof OPTIONS[number];
  isActive: boolean;
}

function OptionItem({name, isActive}: OptionItemProps): JSX.Element {
  return (
    <li className={`places__option ${isActive && 'places__option--active'}`} tabIndex={0}>{name}</li>
  );
}

function SortOptions(): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {OPTIONS.map((name, index) => <OptionItem name={name} isActive={index === 0} key={name} />)}
    </ul>
  );
}

export default SortOptions;
