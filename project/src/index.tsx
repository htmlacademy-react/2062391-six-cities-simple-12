import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { mocksOffers } from '../src/mocks/offers';
import { mocksReviews } from '../src/mocks/reviews';

const Settings = {
  placesCount: 321,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placesCount = { Settings.placesCount } offers={ mocksOffers } reviews={mocksReviews} />
  </React.StrictMode>,
);
