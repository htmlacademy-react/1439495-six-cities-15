import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getAuthorizationStatus } from '../../store/user/user-selectors';
import { changeFavoriteStatus } from '../../store/api-actions';
import { getChangeFavoriteLoadingStatus } from '../../store/favorite-cards/favorite-cards-selectors';

type BookmarkButtonProps = {
  cardId: string;
  className?: string;
  isFavorite: boolean;
}


const BookmarkButton = memo(({isFavorite, cardId, className = 'place-card'}: BookmarkButtonProps): JSX.Element => {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoading = useAppSelector(getChangeFavoriteLoadingStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoutes.Login);
      return;
    }
    dispatch(changeFavoriteStatus({
      offerId: cardId,
      status: Number(!isFavorite)
    }));
  };

  return (
    <button
      className={`${className}__bookmark-button button ${isFavorite && `${className}__bookmark-button--active`}`}
      type="button"
      onClick={handleButtonClick}
      disabled={isLoading}
      data-testid='bookmark'
    >
      <svg className={`${className}__bookmark-icon`} width={className === 'offer' ? 31 : 18} height={className === 'offer' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
});

BookmarkButton.displayName = 'BookmarkButton';

export default BookmarkButton;
