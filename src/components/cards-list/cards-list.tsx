import Card from '../../components/card/card.tsx';
import { TCard } from '../../mock/types.ts';

type CardsListProps = {
  cards: TCard[];
  onMouseHover: (arg?: TCard) => void;
}

function CardsList({cards, onMouseHover}: CardsListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => <Card card={card} key={card.id} onMouseHover={onMouseHover} />)}
    </div>
  );
}

export default CardsList;
