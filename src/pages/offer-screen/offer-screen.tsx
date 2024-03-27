import { useParams } from 'react-router-dom';
import { useEffect, memo } from 'react';
import Map from '../../components/map/map.tsx';
import ReviewForm from '../../components/review-form/review-form.tsx';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.tsx';
import CardsList from '../../components/cards-list/cards-list.tsx';
import { AuthorizationStatus } from '../../const.ts';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.tsx';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks.ts';
import { fetchNearbyCards, fetchOfferComments, getOfferInfoByID } from '../../store/api-actions.ts';
import { getAuthorizationStatus } from '../../store/user/user-selectors.ts';
import { getNearbyCards, getOfferComments, getOfferErrorStatus, getOfferInfo, getOfferLoadingStatus } from '../../store/offer/offer-selectors.ts';

// eslint-disable-next-line prefer-arrow-callback
const ImageItem = memo(function ImageItem({image}: {image: string}): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>
  );
});

// eslint-disable-next-line prefer-arrow-callback
const ImagesList = memo(function ImagesList({images}: {images: string[]}): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => <ImageItem image={image} key={image} />)}
      </div>
    </div>
  );
});

// eslint-disable-next-line prefer-arrow-callback
const FeatureItem = memo(function FeatureItem({feature}: {feature: string}): JSX.Element {
  return (<li className="offer__inside-item">{feature}</li>);
});

// eslint-disable-next-line prefer-arrow-callback
const FeaturesInsideList = memo(function FeaturesInsideList({features}: {features: string[]}): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {features.map((feature) => <FeatureItem feature={feature} key={feature}/>)}
    </ul>
  );
});

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOfferInfoByID(id));
      dispatch(fetchNearbyCards(id));
      dispatch(fetchOfferComments(id));
    }
  }, [id, dispatch]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoading = useAppSelector(getOfferLoadingStatus);
  const isServerError = useAppSelector(getOfferErrorStatus);
  const offer = useAppSelector(getOfferInfo);
  const offerComments = useAppSelector(getOfferComments);
  const nearbyCards = useAppSelector(getNearbyCards);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isServerError) {
    return (
      <main className="page__main page__main--offer">
        <h3>Произошла ошибка при загрузке данных.</h3>
      </main>
    );
  }

  if (!offer) {
    return <NotFoundScreen />;
  }

  const {title, type, price, images, description, bedrooms, isPremium, goods, maxAdults, rating} = offer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <ImagesList images={images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <div className="offer__mark"><span>Premium</span></div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${Math.round(rating) * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{type}</li>
              <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
              <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <FeaturesInsideList features={goods} />
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {offer.host.name}
                </span>
                {offer.host.isPro && (<span className="offer__user-status">Pro</span>)}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerComments.length}</span></h2>
              <ReviewsList reviews={offerComments}/>
              {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
            </section>
          </div>
        </div>
        <Map className="offer__map" cards={[...nearbyCards.slice(0, 3), offer]} activeCard={offer} city={offer.city} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardsList className='near-places__list places__list' cards={nearbyCards.slice(0, 3)} />
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
