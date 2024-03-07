import { useState } from 'react';
import CardsList from '../../components/cards-list/cards-list.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import Map from '../../components/map/map.tsx';
import SortOptions from '../../components/sort-options/sort-options.tsx';
import { TCard } from '../../mock/types.ts';

type MainScreenProps = {
  rentOffersCount: number;
  cards: TCard[];
}

function MainScreen({rentOffersCount, cards}: MainScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TCard | null>();

  const handleSelectActiveCard = (card?: TCard) => {
    setActiveCard(card);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{rentOffersCount} places to stay in Amsterdam</b>
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
            <CardsList cards={cards} onMouseHover={handleSelectActiveCard}/>
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
