import {Personal} from '../interfaces/personal';

export const PERSONALS: Array<Personal> = [
  {
    photo: 'https://www.gstatic.com/tv/thumb/persons/28555/28555_v9_ba.jpg',
    name: 'Jackie Chan',
    phone: [381112223344, 123412341234],
    city: 'HongKong',
    incomes: 1101656695,
    segments: [{
        segment: 'actor',
        percent: 70
      },
      {
        segment: 'singer',
        percent: 10
      },
      {
        segment: 'other',
        percent: 20
      }
    ],
    auto: 'Mitsubishi'
  }
];
