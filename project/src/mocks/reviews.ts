import { Review } from '../types/types';

export const mocksReviews: Review[] = [
  {
    id: 1,
    authorUrl: 'img/avatar-max.jpg',
    authorName: 'Nikita',
    authorRatting: 78,
    date: new Date('Октябрь 2022'),
    text: 'We have stayed at the LondonHouse for our annual visit to Chicago for the past six years. Our recent stay once again confirmed the comfortable, spacious, clean accommodations and exceptional customer service.'
  },
  {
    id: 2,
    authorUrl: 'img/avatar-angelina.jpg',
    authorName: 'Katerina',
    authorRatting: 65,
    date: new Date('Март 2023'),
    text: 'Yes, the price can vary but it is always competitive with the other Loop and surrounding hotels, given the time of year and what is happening in Chicago. It is conveniently located for walking the entire Loop or a short Uber ride anywhere in Chicago. We only have breakfast at the hotel and the food is good and reasonably priced'
  },
  {
    id: 3,
    authorUrl: 'img/avatar-angelina.jpg',
    authorName: 'Florida',
    authorRatting: 88,
    date: new Date('Апрель 2023'),
    text: 'We were promptly greeted and given a brief overview of amenities. The hotel was beautiful, our room was clean and comfortable. The bedding and linens were nice quality. '
  },
  {
    id: 4,
    authorUrl: 'img/avatar-max.jpg',
    authorName: 'Nikolay',
    authorRatting: 93,
    date: new Date('Апрель 2023'),
    text: 'The views were stunning. At night, I stared from our room window in awe. Everyone was friendly and welcoming. The location was a great area to walk everywhere. I would definitely return.'
  },
  {
    id: 5,
    authorUrl: 'img/avatar-max.jpg',
    authorName: 'Alex',
    authorRatting: 37,
    date: new Date('Апрель 2023'),
    text: 'One of my favorite hotels to stay at while visiting the city. Staff is very welcoming and friendly, specifically the day time manager Marcus. Checking in has never been so easy !'
  },
];
