import { useState } from 'react';
import CardsList from '../../components/cards-list/cards-list.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import Map from '../../components/map/map.tsx';
import SortOptions from '../../components/sort-options/sort-options.tsx';
import { TCard } from '../../mock/types.ts';
import { CITIES } from '../../const.ts';

const ACTIVE_CITY: typeof CITIES[number] = CITIES[3];

type MainScreenProps = {
  cards: TCard[];
}

function MainScreen({cards}: MainScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TCard | null>();

  const handleSelectActiveCard = (card?: TCard) => {
    setActiveCard(card);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList activeCity={ACTIVE_CITY} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cards.length} places to stay in {ACTIVE_CITY}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <SortOptions />
            </form>
            <CardsList className='cities__places-list places__list tabs__content' cards={cards} onMouseHover={handleSelectActiveCard}/>
          </section>
          <div className="cities__right-section">
            <Map cards={cards} activeCard={activeCard}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
