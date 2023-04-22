import { useParams, Link } from 'react-router-dom';

import Map from '../../components/map/map';
import { points } from '../../mocks/points';
import ErrorPage from '../error-page/error-page';
import { Offer, Review, Point } from '../../types/types';
import { CITIES } from '../../constants/constants';
import ReviewsList from '../../components/reviews-list/reviews-list';
import CommentForm from '../../components/comment-form/comment-form';

type RoomPageProps = {
  offers: Offer[];
  reviews: Review[];
  selectedPoint: Point | undefined;
}

function RoomPage ({offers, reviews, selectedPoint}: RoomPageProps): JSX.Element {
  const path = useParams();
  const pageOffer = offers.find((offer) => (String(offer.id) === String(path.id)));

  const isMain = false;

  if (pageOffer === undefined) {
    return (
      <ErrorPage />
    );
  }

  return (
    <div className="page">
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {
                pageOffer.images.slice(0, 7).map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Фото объекта"/>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {pageOffer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${pageOffer.ratting}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {(pageOffer.ratting * 0.05).toFixed(1)}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {pageOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  ${pageOffer.bedrooms} {pageOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max ${pageOffer.maxGuests} {pageOffer.maxGuests > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;${pageOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {
                    pageOffer.advantages.map((advantage) => (
                      <li className="property__inside-item" key={advantage}>
                        ${advantage}
                      </li>
                    ))
                  }

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={pageOffer.owner.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {pageOffer.owner.name}
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {pageOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length > 0 ? reviews.length : 'Оставь первый отзыв!'}</span></h2>
                <ul className="reviews__list">

                  <ReviewsList reviews={reviews}/>

                </ul>

                <CommentForm />

              </section>
            </div>
          </div>
          {/* <section className="property__map map"></section> */}
          <Map city={CITIES[3]} points={points} selectedPoint={selectedPoint} isMain={isMain} />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {
                offers.slice(0, 4).map((offer: Offer) => ( offer.id !== pageOffer.id ) &&

                  <article className="near-places__card place-card" key={offer.id}>
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <Link to={`/offer/${offer.id}`} >
                        <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Фото объекта"/>
                      </Link>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offer.price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: `${offer.ratting}%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to={`/offer/${offer.id}`}>
                          {offer.title}
                        </Link>
                      </h2>
                      <p className="place-card__type">
                        {offer.type}
                      </p>
                    </div>
                  </article>
                )
              }

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
