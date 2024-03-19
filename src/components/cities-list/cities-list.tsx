import { CITIES } from '../../const.ts';
import CityItem from '../city-item/city-item.tsx';

type CitiesListProps = {
  activeCity: string;
}

function CitiesList({activeCity}: CitiesListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CityItem city={city.name} key={city.name} activeCity={activeCity} />)}
    </ul>
  );
}

export default CitiesList;
