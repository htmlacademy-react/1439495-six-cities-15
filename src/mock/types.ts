export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  images: string[];
  city: string;
  location: TLocation;
  description: string;
  bedrooms: number;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  goods: string[];
  maxAdults: number;
  comments: TReview[];
}
