import { Link } from 'react-router-dom';
import { memo } from 'react';
import { AppRoutes, CITIES } from '../../const.ts';
import { useAppDispatch } from '../../hooks/store-hooks.ts';
import { changeCity } from '../../store/city/city-slice.ts';

type CityItemProps = {
  city: string;
  activeCity?: string;
}

const CityItem = memo(({city, activeCity}: CityItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCityClick = () => {
    const newCity = CITIES.find((item) => item.name === city);
    dispatch(changeCity({city: newCity as typeof CITIES[number]}));
  };

  return (
    <Link className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} to={AppRoutes.Main} onClick={handleCityClick}>
      <span>{city}</span>
    </Link>
  );
});

CityItem.displayName = 'CityItem';

export default CityItem;
