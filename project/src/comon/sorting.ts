import { Offer } from '../types/types';
import { SORT_MENU_ITEMS } from '../constants/constants';


function compareLowToHigh (a: Offer, b: Offer) {
  return b.price - a.price;
}

function compareHighToLow (a: Offer, b: Offer) {
  return a.price - b.price;
}

function compareByRatting (a: Offer, b: Offer) {
  return b.ratting - a.ratting;
}

export function sortOffers (offers: Offer[], sortMenuItem: SORT_MENU_ITEMS) {

  const offersCopy = offers.slice();


  switch (sortMenuItem) {
    case (SORT_MENU_ITEMS.Default):
      return offers;
    case (SORT_MENU_ITEMS.HIGH_TO_LOW):
      return offersCopy.sort(compareLowToHigh);
    case (SORT_MENU_ITEMS.LOW_TO_HIGH):
      return offersCopy.sort(compareHighToLow);
    case (SORT_MENU_ITEMS.TOP_RATES):
      return offersCopy.sort(compareByRatting);
  }
}
