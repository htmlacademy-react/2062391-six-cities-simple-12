import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/types';

export const setCityState = createAction<City>('setCityState');

export const setOffersState = createAction<Offer[]>('setOffersState');
