import { CITIES } from '../../const.ts';

type CityItemProps = {
  city: typeof CITIES[number];
}

function CityItem({city}: CityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function CitiesList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CityItem city={city} key={city}/>)}
    </ul>
  );
}

export default CitiesList;
