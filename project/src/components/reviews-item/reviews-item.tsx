import { Review } from '../../types/types';

type ReviewsItemProps = {
  review: Review;
}

function ReviewsItem ({review}: ReviewsItemProps): JSX.Element {
  const { authorName, authorRatting, text, date, authorUrl } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={authorUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {authorName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${authorRatting}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={`${date.toDateString()}`}>{date.toDateString()}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
