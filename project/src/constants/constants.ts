

export const ROUTES = {
  MAIN: '/',
  LOGIN: 'login',
  ROOM: 'offer/:id',
  ERROR: '*'
} as const;


export const CITIES = [
  {
    title: 'Paris',
    lat: 48.8566,
    lng: 2.3522
  },
  {
    title: 'Cologne',
    lat: 50.9375,
    lng: 6.9603
  },
  {
    title: 'Brussels',
    lat: 50.8476,
    lng: 4.3572
  },
  {
    title: 'Amsterdam',
    lat: 52.3676,
    lng: 4.9041,
  },
  {
    title: 'Hamburg',
    lat: 53.5488,
    lng: 9.9872
  },
  {
    title: 'Dusseldorf',
    lat: 51.2277,
    lng: 6.7735
  }
] as const;

export const HOUSING_TYPES = {
  APARTMENT: 'Apartment',
  ROOM: 'Private Room',
  HOUSE: 'House',
  HOTEL: 'Hotel'
} as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
