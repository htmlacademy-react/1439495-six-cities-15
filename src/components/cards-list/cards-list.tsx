import { memo } from 'react';
import Card from '../../components/card/card.tsx';
import { TCard } from '../../types/types';

type CardsListProps = {
  cards: TCard[];
  className: string;
  onMouseHover?: (arg?: TCard) => void;
}

const CardsList = memo(({cards, className, onMouseHover}: CardsListProps): JSX.Element => (
  <div className={className} data-testid='cards-list'>
    {cards.map((card) => <Card card={card} key={card.id} onMouseHover={onMouseHover} className={className.includes('near-places') ? 'near-places' : 'cities'} />)}
  </div>
));

CardsList.displayName = 'CardsList';

export default CardsList;
