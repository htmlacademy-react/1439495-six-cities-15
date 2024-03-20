import { useState, useEffect } from 'react';
import CardsList from '../../components/cards-list/cards-list.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import Map from '../../components/map/map.tsx';
import { TCard } from '../../types/types';
import { useAppSelector } from '../../hooks/store-hooks.ts';
import SortForm from '../../components/sort-form/sort-form.tsx';
import { SortingOptions } from '../../const.ts';
import NoCardsInCity from './no-cards-in-city.tsx';

const sortBy = {
  [SortingOptions.POPULAR]: (cards: TCard[]) => cards,
  [SortingOptions.PRICE_LOW_TO_HIGH]: (cards: TCard[]) => cards.sort((firstCard, secondCard) => firstCard.price - secondCard.price),
  [SortingOptions.PRICE_HIGH_TO_LOW]: (cards: TCard[]) => cards.sort((firstCard, secondCard) => secondCard.price - firstCard.price),
  [SortingOptions.RATING]: (cards: TCard[]) => cards.sort((firstCard, secondCard) => secondCard.rating - firstCard.rating),
};

function MainScreen(): JSX.Element {
  const cards = useAppSelector((state) => state.cards.cards);
  const city = useAppSelector((state) => state.city);
  const activeSort = useAppSelector((state) => state.sortOption);

  const [activeCard, setActiveCard] = useState<TCard | null>();
  const [cardsInActiveCity, setCardsInActiveCity] = useState<TCard[]>([]);

  useEffect(() => {
    setCardsInActiveCity(cards.filter((card) => card.city.name === city.name));
  }, [cards, city]);

  const handleSelectActiveCard = (card?: TCard) => {
    setActiveCard(card);
  };

  return (
    <main className={`page__main page__main--index ${cardsInActiveCity.length === 0 && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList activeCity={city.name} />
        </section>
      </div>
      {cardsInActiveCity.length === 0 ? <NoCardsInCity/> : (
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cardsInActiveCity.length} places to stay in {city.name}</b>
              <SortForm />
              <CardsList className='cities__places-list places__list tabs__content' cards={sortBy[activeSort]([...cardsInActiveCity])} onMouseHover={handleSelectActiveCard}/>
            </section>
            <div className="cities__right-section">
              <Map cards={cardsInActiveCity} activeCard={activeCard} city={city} />
            </div>
          </div>
        </div>)}
    </main>
  );
}

export default MainScreen;
