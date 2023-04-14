

export const ROUTES = {
  MAIN: '/',
  LOGIN: 'login',
  ROOM: 'offer/:id',
  ERROR: '*'
} as const;


export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export const HOUSING_TYPES = {
  APARTMENT: 'Apartment',
  ROOM: 'Private Room',
  HOUSE: 'House',
  HOTEL: 'Hotel'
} as const;

