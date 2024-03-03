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

export type TCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  images: string[];
  city: string;
  description: string;
  bedrooms: number;
  isPremium: boolean;
  previewImage: string;
  goods: string[];
  maxAdults: number;
  comments: TReview[];
}
