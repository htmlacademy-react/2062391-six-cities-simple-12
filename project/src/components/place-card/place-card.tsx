import { Link } from 'react-router-dom';

import { Offer } from '../../types/types';


type PlaceCardProps = {
  offer: Offer;
  };

function PlaceCard ({offer}: PlaceCardProps): JSX.Element {
  const { title, images, price, ratting, type, isPremium, id } = offer;

  return (
    <article className="cities__card place-card" >
      { isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div> }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Фото объекта"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratting}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="offer/:id">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
