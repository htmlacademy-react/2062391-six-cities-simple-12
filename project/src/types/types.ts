
export type Offer = {
  id: number;
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
