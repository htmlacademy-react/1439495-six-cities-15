import { CITIES } from '../const.ts';

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

export type TCity = {
  name: string;
  location: TLocation;
}

export type TCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  images: string[];
  city: typeof CITIES[number];
  location: TLocation;
  description: string;
  bedrooms: number;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
  goods: string[];
  maxAdults: number;
  comments: TReview[];
}
