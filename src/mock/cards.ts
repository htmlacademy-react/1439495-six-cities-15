import { TCard } from './types';

export const cards: TCard[] = [
  {
    id: '12sdfsfs',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    isPremium: true,
    isFavorite: false,
    rating: 2.9,
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
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
    isFavorite: false,
    rating: 3.6,
    previewImage: 'img/room.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
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
    isFavorite: false,
    rating: 4.8,
    previewImage: 'img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
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
    isFavorite: false,
    rating: 3.2,
    previewImage: 'img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
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
    isFavorite: false,
    rating: 2.7,
    previewImage: 'img/studio-01.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '23fb08b1-5a52-46fe-9581-0db94fd92c94',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 217,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.4,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'c8c48473-d7a0-48dc-a569-cb8512a54173',
    title: 'House in countryside',
    type: 'apartment',
    price: 261,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.2,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'db1365bd-bfe4-452a-b549-59c29e5d7ce0',
    title: 'House in countryside',
    type: 'hotel',
    price: 184,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.7,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '76e302ef-d496-49e9-8ba9-a290ea60c575',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 205,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.3,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '2d6d7b46-7ca2-4829-b3bf-b92401328732',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 116,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'a137a5db-ca74-46e3-be0b-a52d9b2af706',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'hotel',
    price: 168,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.8,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'ed7c1dd7-bc6b-4d46-9d41-f1ff0af0d6c0',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 118,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'ba4d1ce2-60f4-49b7-87a4-7f2dc8bede36',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 269,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.947361,
      longitude: 6.9799739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'bbc4c738-7b12-4dab-8a5c-23fd240bdd76',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 699,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '121d4c4b-dfaa-4d65-86b1-ef8f4cd511d7',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 106,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.6,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'b9da4d28-de0f-44de-8b3a-7dd30c8ab061',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 427,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.7,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '62259c36-a1a0-4e3e-81a0-79d9ba33aaaa',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 211,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.833557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'c9e4c2d5-9e47-4b86-b7e9-b4dbf2a2273c',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 474,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'b1e49252-3a3f-429b-b72f-6781a2cd4c3b',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 151,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.538341,
      longitude: 9.976654000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '7558d125-e6bf-46bf-aa45-14a39d5de9ee',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 229,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.563341,
      longitude: 10.019654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.6,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '5e6088f4-55e7-4fb5-bf12-d693c83a9313',
    title: 'The Joshua Tree House',
    type: 'room',
    price: 145,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.529341,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.7,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'c1f30a39-233d-4e01-825b-c4dd401f94d5',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 148,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.565341,
      longitude: 9.980654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.5,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'c67149ab-a35b-4531-8e2f-30369a1b3942',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 241,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.546341000000005,
      longitude: 10.022654000000001,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.2,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'f306d72f-e454-4df1-80ea-8d44bb06e1b4',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 214,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'a7cfd4c3-b081-41c5-bc40-10efc6afa2d9',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 194,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: 'd7db4c79-2562-4f55-b03e-ce5db867fed7',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 153,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.211402,
      longitude: 6.756314000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
  {
    id: '2f41f566-d366-43f3-a48c-889631203d34',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 446,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.228402,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    maxAdults: 2,
    comments: []
  },
];
