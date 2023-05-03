
export type Offer = {
  id: string;
  images: string[];
  title: string;
  description: string;
  isPremium: boolean;
  isActive: boolean;
  type: string;
  ratting: number;
  bedrooms: number;
  maxGuests: number;
  price: number;
  advantages: string[];
  city: {
    name: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  owner: {
    avatar: string;
    name: string;
  };
}

export type Review = {
  id: number;
  authorUrl: string;
  authorName: string;
  authorRatting: number;
  date: Date;
  text: string;
}

export type Point = {
  id?: string;
  lat: number;
  lng: number;
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom?: number;
}
