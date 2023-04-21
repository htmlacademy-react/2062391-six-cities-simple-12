import { useState } from 'react';
import { Offer, Point } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offer[];
  changeSelectPoint: (point: Point | undefined) => void;
}

function PlaceCardList ({offers, changeSelectPoint}: PlaceCardListProps): JSX.Element {
  const [, setActiveCard ] = useState({});

  const onMouseOverHandler = (evt: React.MouseEvent<HTMLElement>) => {
    setActiveCard(evt.currentTarget);
  };

  return(
    <>
      {
        offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} onMouseOver={onMouseOverHandler}/>
        ))
      }
    </>
  );
}
export default PlaceCardList;
