import { TCard } from './types';

export const cards: TCard[] = [
  {
    id: '12sdfsfs',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    city: 'Amsterdam',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 4,
    comments: [
      {
        id: 'hskagfs',
        date: '2019-04-24',
        user: {
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false,
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
      }
    ]
  },
  {
    id: 'sdfs84ds',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isPremium: false,
    previewImage: 'img/room.jpg',
    city: 'Amsterdam',
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'sdfukmsik8a',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    city: 'Cologne',
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 4,
    goods: ['Wi-Fi', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 6,
    comments: [
      {
        id: 'hskagfsadaf',
        date: '2019-04-24',
        user: {
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false,
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 5,
      },
      {
        id: 'hs234dsfskagfs',
        date: '2019-08-24',
        user: {
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true,
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
      }
    ]
  },
  {
    id: '8asdhha5sdfa',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    city: 'Amsterdam',
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 1,
    goods: ['Cabel TV', 'Fridge'],
    maxAdults: 3,
    comments: [
      {
        id: 'hskagfs',
        date: '2019-04-24',
        user: {
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false,
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 5,
      }
    ]
  },
  {
    id: 'asdasd35sda',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isPremium: false,
    previewImage: 'img/studio-01.jpg',
    city: 'Cologne',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  }
];
