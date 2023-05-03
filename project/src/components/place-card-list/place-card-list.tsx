
import { Offer } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offer[];
  onMouseOver: (evt: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: (evt: React.MouseEvent<HTMLElement>) => void;
}

function PlaceCardList ({offers, onMouseOver, onMouseLeave}: PlaceCardListProps): JSX.Element {

  return(
    <>
      {
        offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
        ))
      }
    </>
  );
}
export default PlaceCardList;
