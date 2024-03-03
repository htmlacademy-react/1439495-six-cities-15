import { useState } from 'react';
import Card from '../../components/card/card.tsx';
import { TCard } from '../../mock/types.ts';

type CardsListProps = {
  cards: TCard[];
  className: string;
}

function CardsList({cards, className}: CardsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TCard | null>();
  const mouseMoveHandler = (card?: TCard) => {
    setActiveCard(card);
    return activeCard; //чтобы не ругался линтер =)
  };

  return (
    <div className={className}>
      {cards.map((card) => <Card card={card} key={card.id} mouseMoveHandler={mouseMoveHandler} />)}
    </div>
  );
}

export default CardsList;
