import { Link } from 'react-router-dom';

import { City, Offer } from '../../types/types';
import { CITIES } from '../../constants/constants';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCityState, setOffersState } from '../../store/actions';
import { useEffect, useState } from 'react';

type MainPageProps = {
  offers: Offer[];
  selectedPoint: string | undefined;
  onMouseOver: (evt: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: (evt: React.MouseEvent<HTMLElement>) => void;
}

const getCurrentCityOffers = (currentCityName: string, items: Offer[]) => items.filter((item) => item.city.name === currentCityName);

function MainPage ({ offers, onMouseOver, onMouseLeave, selectedPoint}: MainPageProps): JSX.Element {
  const isMain = true;

  const [selectedCityOffers, setSelectedOffers] = useState<Offer[]>([]);

  const currentCity: City = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offersCards);
  const dispatch = useAppDispatch();

  const points = selectedCityOffers.map((offer) => ({
    id: offer.id,
    lat: offer.location.lat,
    lng: offer.location.lng,
  }));


  useEffect(() => {
    dispatch(setOffersState(offers));
  }, [dispatch, offers]);

  useEffect(() => {
    const currentCityOffers = getCurrentCityOffers(currentCity.title, currentOffers);
    setSelectedOffers(currentCityOffers);
  }, [currentOffers, currentCity.title]);


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {
              CITIES.map((city) => (
                <li className="locations__item" key={city.title} onClick={(evt) => dispatch(setCityState(CITIES.find((selectedCity) => selectedCity.title === evt.currentTarget.textContent) as City))} >
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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">

              <PlaceCardList offers={selectedCityOffers} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />

            </div>
          </section>
          <div className="cities__right-section">

            <Map city={currentCity} points={points} selectedPoint={selectedPoint} isMain={isMain}/>

          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
