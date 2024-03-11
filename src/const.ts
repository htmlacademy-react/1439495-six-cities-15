export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export const MAP_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const CommentLength = {
  MIN: 50,
  MAX: 300
} as const;

export const RatingNames: {[index: string]: string} = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

export const AppRoutes = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
