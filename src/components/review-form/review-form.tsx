import { ReactEventHandler, useState } from 'react';
import { CommentLength, RatingNames } from '../../const.ts';

type InputItemProps = {
  value: string;
  title: string;
  onInputChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

type FormDataType = {
  rating: number;
  review: string;
}

function InputItem({value, title, onInputChange}: InputItemProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onInputChange}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>({
    rating: 0,
    review: ''
  });

  const handleFormChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    const {value, name} = evt.currentTarget;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingNames).map(([rate, title]) => <InputItem value={rate} title={title} key={title} onInputChange={handleFormChange}/>).reverse()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFormChange} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.rating === 0 || formData.review.length < CommentLength.MIN || formData.review.length > CommentLength.MAX}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
