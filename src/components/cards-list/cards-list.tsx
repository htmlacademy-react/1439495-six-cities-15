import { Cards } from '../../mock/cards.ts';
import Card from '../../components/card/card.tsx';

function CardsList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Cards.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
}

export default CardsList;
