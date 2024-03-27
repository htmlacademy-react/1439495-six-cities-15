import { memo } from 'react';
import Card from '../../components/card/card.tsx';
import { TCard } from '../../types/types';

type CardsListProps = {
  cards: TCard[];
  className: string;
  onMouseHover?: (arg?: TCard) => void;
}

// eslint-disable-next-line prefer-arrow-callback
const CardsList = memo(function CardsList({cards, className, onMouseHover}: CardsListProps): JSX.Element {

  return (
    <div className={className}>
      {cards.map((card) => <Card card={card} key={card.id} onMouseHover={onMouseHover} />)}
    </div>
  );
});

export default CardsList;
