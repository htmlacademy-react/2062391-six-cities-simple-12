import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import ErrorPage from '../../pages/error-page/error-page';
import RoomPage from '../../pages/room-page/room-page';
import Layout from '../layout/layout';

import { Offer, Review } from '../../types/types';

type AppProps = {
  placesCount: number;
  offers: Offer[];
  reviews: Review[];
}

function App({ placesCount, offers, reviews }: AppProps ): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN}>
          <Route element={ <Layout /> }>
            <Route index element= { <MainPage placesCount={ placesCount } offers={offers} /> }/>
            <Route path={ROUTES.ROOM} element={ <RoomPage offers={offers} reviews={reviews} /> }/>
          </Route>
          <Route path={ROUTES.LOGIN} element={ <LoginPage />}/>
          <Route path={ROUTES.ERROR} element= { <ErrorPage /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
