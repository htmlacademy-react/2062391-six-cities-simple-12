
import { Offer } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offer[];
}

function PlaceCardList ({offers}: PlaceCardListProps): JSX.Element {

  return(
    <>
      {
        offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} />
        ))
      }
    </>
  );
}
export default PlaceCardList;
