import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { CITIES } from '../../const.ts';
import { changeCity } from '../../store/action.ts';

type CityItemProps = {
  city: string;
  activeCity: string;
  onCityClick: MouseEventHandler<HTMLElement>;
}

type CitiesListProps = {
  activeCity: string;
}

function CityItem({city, activeCity, onCityClick}: CityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} href="#" onClick={onCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
}

function CitiesList({activeCity}: CitiesListProps): JSX.Element {
  const dispatch = useDispatch();

  const handleCityClick: MouseEventHandler<HTMLElement> = (evt) => {
    const span = evt.target as HTMLElement;
    const cityName = span.innerText;
    const newCity = CITIES.find((city) => city.name === cityName);
    dispatch(changeCity({city: newCity as typeof CITIES[number]}));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CityItem city={city.name} key={city.name} activeCity={activeCity} onCityClick={handleCityClick} />)}
    </ul>
  );
}

export default CitiesList;
