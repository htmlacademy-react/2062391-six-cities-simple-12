import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import { useState } from 'react';

import { ROUTES } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import ErrorPage from '../../pages/error-page/error-page';
import RoomPage from '../../pages/room-page/room-page';
import { Offer, Review } from '../../types/types';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
}

function App({ offers, reviews }: AppProps ): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<string>('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN}>
          <Route element={ <Layout /> }>
            <Route index element= { <MainPage offers={offers} selectedPoint={selectedPoint} onMouseOver={(evt) => setSelectedPoint(evt.currentTarget.id)} onMouseLeave={(evt) => setSelectedPoint('')} /> }/>
            <Route path={ROUTES.ROOM} element={ <RoomPage offers={offers} reviews={reviews} selectedPoint={selectedPoint} /> }/>
          </Route>
          <Route path={ROUTES.LOGIN} element={ <LoginPage />}/>
          <Route path={ROUTES.ERROR} element= { <ErrorPage /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
