import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Map from '../../components/map/map';
import { City, Offer } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CITIES, SORT_MENU_ITEMS } from '../../constants/constants';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import OffersSortingMenu from '../../components/offers-sorting-menu/offers-sorting-menu';
import {
  setCityState,
  setOffersState,
  setSelectedOffersState
} from '../../store/actions';
import { sortOffers } from '../../comon/sorting';


type MainPageProps = {
  offers: Offer[];
}

const getCurrentCityOffers = (currentCityName: string, items: Offer[]) => items.filter((item) => item.city.name === currentCityName);

function MainPage ({ offers }: MainPageProps): JSX.Element {
  const isMain = true;

  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offersCards);
  const selectedCityOffers = useAppSelector((state) => state.setSelectedOffersState);
  const dispatch = useAppDispatch();

  const points = selectedCityOffers.map((offer: Offer) => ({
    id: offer.id,
    lat: offer.location.lat,
    lng: offer.location.lng,
  }));

  const [activeSortItem, setActiveSortItem] = useState(SORT_MENU_ITEMS.Default);

  const sortedCityOffers = sortOffers(selectedCityOffers, activeSortItem);

  useEffect(() => {
    dispatch(setOffersState(offers));
  }, [dispatch, offers]);

  useEffect(() => {
    const currentCityOffers = getCurrentCityOffers(currentCity.title, currentOffers);
    dispatch(setSelectedOffersState(currentCityOffers));
  }, [dispatch, currentOffers, currentCity.title]);


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {
              CITIES.map((city) => (
                <li className="locations__item" key={city.title} onClick={(evt) => dispatch(setCityState(CITIES.find((el) => el.title === evt.currentTarget.textContent) as City))} >
                  <Link className={`locations__item-link tabs__item ${city.title === currentCity.title ? 'tabs__item--active' : ''}`} to="/">
                    <span>{city.title}</span>
                  </Link>
                </li>
              ))
            }

          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{ selectedCityOffers.length } {selectedCityOffers.length > 1 ? 'places' : 'place'} to stay in {currentCity.title}</b>
            <OffersSortingMenu setActiveSortItem={setActiveSortItem} />
            <div className="cities__places-list places__list tabs__content">

              <PlaceCardList offers={sortedCityOffers} />

            </div>
          </section>
          <div className="cities__right-section">

            <Map city={currentCity} points={points} isMain={isMain}/>

          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
