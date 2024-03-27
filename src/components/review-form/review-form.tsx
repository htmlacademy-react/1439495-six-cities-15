import { ReactEventHandler, useState, FormEvent, memo } from 'react';
import { useParams } from 'react-router-dom';
import { CommentLength, RatingNames } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks.ts';
import { postCommentToOffer } from '../../store/api-actions.ts';
import { getPostReviewErrorStatus } from '../../store/offer/offer-selectors.ts';

type InputItemProps = {
  value: string;
  title: string;
  checkedValue: string;
  onInputChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export type FormDataType = {
  rating: string;
  review: string;
}

function InputItem({value, title, checkedValue, onInputChange}: InputItemProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onInputChange} checked={checkedValue === value} />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

// eslint-disable-next-line prefer-arrow-callback
const ReviewForm = memo(function ReviewForm(): JSX.Element {
  const { id: offerId } = useParams();
  const isPostReviewError = useAppSelector(getPostReviewErrorStatus);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormDataType>({
    rating: '0',
    review: ''
  });

  const handleFormChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    const {value, name} = evt.currentTarget;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId) {
      dispatch(postCommentToOffer({
        id: offerId,
        comment: formData
      }));
      if (!isPostReviewError) {
        setFormData({
          rating: '0',
          review: ''
        });
      }
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingNames).map(([rate, title]) => <InputItem value={rate} title={title} key={title} onInputChange={handleFormChange} checkedValue={formData.rating}/>).reverse()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFormChange} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.rating === '0' || formData.review.length < CommentLength.MIN || formData.review.length > CommentLength.MAX}>Submit</button>
      </div>
    </form>
  );
});

export default ReviewForm;
