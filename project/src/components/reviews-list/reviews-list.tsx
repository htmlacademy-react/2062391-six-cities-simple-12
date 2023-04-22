import ReviewsItem from '../reviews-item/reviews-item';
import { Review } from '../../types/types';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList ({reviews}: ReviewsListProps): JSX.Element{
  return (
    <>

      {
        reviews.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))
      }

    </>
  );
}

export default ReviewsList;
