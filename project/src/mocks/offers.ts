import { Offer } from '../types/types';
import { HOUSING_TYPES } from '../constants/constants';

export const mocksOffers: Offer[] = [
  {
    id: 1,
    images: ['img/studio-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    title: 'Wood and stone place',
    description: 'We found a “Grand Opening” deal online and have never been to the D.R. The resort had only been open for a few days when we arrived. Wilmer greeted us at check in and was helpful all trip when we had a question. The resort is beautiful from entrance, landscape, pools and beach. We had the place to ourselves mostly since it had just opened up.',
    isPremium: false,
    isActive: false,
    type: HOUSING_TYPES.ROOM,
    ratting: 80,
    bedrooms: 1,
    maxGuests: 2,
    price: 80,
    advantages: ['Wi-Fi', 'Kitchen', 'Fridge', 'Cofee machine', 'Towels'],
    owner: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max'
    }
  },
  {
    id: 2,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Club pool which is very private and quiet if you need to a chill day. Amazing staff anywhere you went to on the resort. They work around the clock to serve you. Our pool server was Ambiorix or “Ambi” and he was super energetic and positive.',
    isPremium: true,
    isActive: false,
    type: HOUSING_TYPES.APARTMENT,
    ratting: 98,
    bedrooms: 2,
    maxGuests: 3,
    price: 180,
    advantages: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Cofee machine', 'Dishwasher', 'Towels', 'Cabel TV'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Violetta',
    }
  },
  {
    id: 3,
    images: ['img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg'],
    title: 'Canal View Prinsengracht',
    description: 'The hibachi experience at The Jade was outstanding! Two Palms Grill on the beach was perfect for breakfast and lunches with the ocean breeze. The Beach Eatery was perfect for munchies throughout the day. The fried chicken there is so good! ',
    isPremium: false,
    isActive: false,
    type: HOUSING_TYPES.APARTMENT,
    ratting: 73,
    bedrooms: 1,
    maxGuests: 2,
    price: 132,
    advantages: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Cabel TV'],
    owner: {
      avatar: 'img/avatar-max.jpg',
      name: 'Anton'
    }
  },
  {
    id: 4,
    images: ['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    title: 'Beautiful &amp; luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: true,
    isActive: false,
    type: HOUSING_TYPES.HOTEL,
    ratting: 82,
    bedrooms: 3,
    maxGuests: 4,
    price: 120,
    advantages: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Cofee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
    }
  }
];
