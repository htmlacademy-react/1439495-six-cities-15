import { Link } from 'react-router-dom';
import { memo } from 'react';
import { TCard } from '../../types/types';
import BookmarkButton from '../bookmark-button/bookmark-button';

type CardProps = {
  card: TCard;
  onMouseHover?: (arg?: TCard) => void;
  className?: string;
}

// eslint-disable-next-line prefer-arrow-callback
const PremiumBadgeForCard = memo(function PremiumBadgeForCard(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
});

// eslint-disable-next-line prefer-arrow-callback
const Card = memo(function Card({card, onMouseHover, className = 'cities'}: CardProps): JSX.Element {
  const {id, title, type, price, isPremium, isFavorite, previewImage, rating} = card;

  const handleMouseEnter = () => {
    if (onMouseHover) {
      onMouseHover(card);
    }
  };

  const handleMouseLeave = () => {
    if (onMouseHover) {
      onMouseHover();
    }
  };

  return (
    <article className={`${className}__card place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && <PremiumBadgeForCard />}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} cardId={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
});

export default Card;
