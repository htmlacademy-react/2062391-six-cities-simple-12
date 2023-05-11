import { createReducer } from '@reduxjs/toolkit';

import { mocksOffers } from '../mocks/offers';
import {
  setCityState,
  setOffersState,
  setSelectedCityState,
  setSelectedOffersState,
} from './actions';
import { City, Offer } from '../types/types';
import { CITIES } from '../constants/constants';

type initialStateProps = {
  city: City;
  selectedCity: string;
  offersCards: Offer[];
  setSelectedOffersState: Offer[];
}

const initialState: initialStateProps = {
  city: CITIES[0],
  selectedCity: '',
  offersCards: [],
  setSelectedOffersState: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityState, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersState, (state) => {
      state.offersCards = mocksOffers;
    })
    .addCase(setSelectedCityState, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setSelectedOffersState, (state, action) => {
      state.setSelectedOffersState = action.payload;
    });
});
