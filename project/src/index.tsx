import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';

import { store } from './store';
import { mocksOffers } from '../src/mocks/offers';
import { mocksReviews } from '../src/mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={ mocksOffers } reviews={mocksReviews} />
    </Provider>
  </React.StrictMode>,
);
