import { memo } from 'react';
import { TReview } from '../../types/types';

export const ReviewItem = memo(({review}: {review: TReview}): JSX.Element => {
  const {date, user, comment, rating} = review;
  const formatDate = new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric' });
  return (
    <li className="reviews__item" data-testid='review-item'>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDate}</time>
      </div>
    </li>
  );
});

ReviewItem.displayName = 'ReviewItem';

const ReviewsList = memo(({reviews}: {reviews: TReview[]}): JSX.Element => (
  <ul className="reviews__list" data-testid='review-list'>
    {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
  </ul>
));

ReviewsList.displayName = 'ReviewsList';

export default ReviewsList;
