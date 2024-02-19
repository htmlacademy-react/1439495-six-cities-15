import { Cities } from '../../const.ts';

type CityItemProprs = {
  city: typeof Cities[number];
}

function CityItem({city}: CityItemProprs): JSX.Element {
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
      {Cities.map((city) => <CityItem city={city} key={city}/>)}
    </ul>
  );
}

export default CitiesList;
