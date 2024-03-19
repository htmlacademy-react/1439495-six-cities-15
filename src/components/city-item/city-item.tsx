import { Link } from 'react-router-dom';
import { AppRoutes, CITIES } from '../../const.ts';
import { changeCity } from '../../store/action.ts';
import { useAppDispatch } from '../../hooks/store-hooks.ts';

type CityItemProps = {
  city: string;
  activeCity?: string;
}

function CityItem({city, activeCity}: CityItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = () => {
    const newCity = CITIES.find((item) => item.name === city);
    dispatch(changeCity({city: newCity as typeof CITIES[number]}));
  };

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} to={AppRoutes.Main} onClick={handleCityClick}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
