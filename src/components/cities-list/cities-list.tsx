import { CITIES } from '../../const.ts';

type CityItemProps = {
  city: typeof CITIES[number];
  activeCity: typeof CITIES[number];
}

type CitiesListProps = {
  activeCity: typeof CITIES[number];
}

function CityItem({city, activeCity}: CityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function CitiesList({activeCity}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CityItem city={city} key={city} activeCity={activeCity}/>)}
    </ul>
  );
}

export default CitiesList;
