import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/types';

export const setCityState = createAction<City>('setCityState');

export const setOffersState = createAction<Offer[]>('setOffersState');

export const setSelectedCityState = createAction<string>('setSelectedCityState');

export const setSelectedOffersState = createAction<Offer[]>('setSelectedOffersState');
