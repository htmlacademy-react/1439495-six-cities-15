import Card from '../../components/card/card.tsx';
import { TCard } from '../../mock/types.ts';

type OffersListProps = {
  cards: TCard[];
}
function OffersList({cards}: OffersListProps): JSX.Element {
  const shownCards = cards.slice(0, 3);
  return (
    <div className="near-places__list places__list">
      {shownCards.map((card) => <Card card={card} className='near-places' key={card.id} />)}
    </div>
  );
}

export default OffersList;
