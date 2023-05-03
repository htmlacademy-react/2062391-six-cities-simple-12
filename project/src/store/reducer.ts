import { createReducer } from '@reduxjs/toolkit';

import { mocksOffers } from '../mocks/offers';
import { setCityState } from './actions';
import { setOffersState } from './actions';
import { City, Offer } from '../types/types';
import { CITIES } from '../constants/constants';

type initialStateProps = {
  city: City;
  offersCards: Offer[];
}

const initialState: initialStateProps = {
  city: CITIES[0],
  offersCards: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityState, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersState, (state) => {
      state.offersCards = mocksOffers;
    });
});
