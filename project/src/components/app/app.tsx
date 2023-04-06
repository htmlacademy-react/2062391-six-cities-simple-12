import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import ErrorPage from '../../pages/error-page/error-page';
import RoomPage from '../../pages/room-page/room-page';
import Layout from '../layout/layout';

type AppProps = {
  placesCount: number;
}

function App({ placesCount }: AppProps ): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={ <Layout /> }>
            <Route index element= { <MainPage placesCount={ placesCount }/> }/>
            <Route path="offer/:id" element={ <RoomPage/> }/>
          </Route>
          <Route path="login" element={ <LoginPage />}/>
          <Route path="*" element= { <ErrorPage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
