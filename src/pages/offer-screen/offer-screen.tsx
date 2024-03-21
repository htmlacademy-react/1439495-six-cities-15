import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Map from '../../components/map/map.tsx';
import ReviewForm from '../../components/review-form/review-form.tsx';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.tsx';
import CardsList from '../../components/cards-list/cards-list.tsx';
import { TOffer, TReview, TCard } from '../../types/types.ts';
import { createAPI } from '../../services/api.ts';
import { APIRoutes } from '../../const.ts';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.tsx';


function ImageItem({image}: {image: string}): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>
  );
}

function ImagesList({images}: {images: string[]}): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => <ImageItem image={image} key={image} />)}
      </div>
    </div>
  );
}

function FeatureItem({feature}: {feature: string}): JSX.Element {
  return (<li className="offer__inside-item">{feature}</li>);
}

function FeaturesInsideList({features}: {features: string[]}): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {features.map((feature) => <FeatureItem feature={feature} key={feature}/>)}
    </ul>
  );
}

function OfferScreen(): JSX.Element {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [offer, setOffer] = useState<TOffer | undefined>();
  const [offerComments, setOfferComments] = useState<TReview[]>([]);
  const [nearbyCards, setNearbyCards] = useState<TCard[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const api = createAPI();
    const getOfferInfo = async () => {
      const {data} = await api.get<TOffer>(`${APIRoutes.Cards}/${id}`);
      setOffer(data);
      const {data: comments} = await api.get<TReview[]>(`${APIRoutes.Comments}/${id}`);
      setOfferComments(comments);
      const {data: cards} = await api.get<TCard[]>(`${APIRoutes.Cards}/${id}/nearby`);
      setNearbyCards(cards);
    };
    getOfferInfo();
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (typeof offer === 'undefined') {
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
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  Angelina
                </span>
                <span className="offer__user-status">
                  Pro
                </span>
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
              <ReviewForm />
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
