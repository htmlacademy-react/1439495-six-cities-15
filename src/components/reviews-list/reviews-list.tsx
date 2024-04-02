import { memo } from 'react';
import { TReview } from '../../types/types';

// eslint-disable-next-line prefer-arrow-callback
const ReviewItem = memo(function ReviewItem({review}: {review: TReview}): JSX.Element {
  const {date, user, comment, rating} = review;
  return (
    <li className="reviews__item">
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
        <time className="reviews__time" dateTime={date}>{new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric' })}</time>
      </div>
    </li>
  );
});

// eslint-disable-next-line prefer-arrow-callback
const ReviewsList = memo(function ReviewsList({reviews}: {reviews: TReview[]}): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
});

export default ReviewsList;
