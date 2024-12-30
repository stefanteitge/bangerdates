import { Temporal } from 'temporal-polyfill';
import { RaceMeeting } from '../types';

export function getRaces(): RaceMeeting[] {
  return [
    {
      date: new Temporal.PlainDate(2024, 10, 20),
      location: 'Venray',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2024, 10, 26),
      location: 'Lobith',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2024, 10, 27),
      location: 'Ronse',
      classes: ['banger', 'caravan'],
    },
    {
      date: new Temporal.PlainDate(2024, 11, 3),
      location: 'Venray',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2024, 11, 3),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2024, 11, 9),
      location: 'Lobith',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2024, 11, 17),
      location: 'Ronse',
      classes: ['banger', 'swb'],
    },
    {
      date: new Temporal.PlainDate(2024, 11, 17),
      location: 'Marrum',
      classes: ['banger', 'f1'],
    },
    {
      date: new Temporal.PlainDate(2024, 12, 1),
      location: 'Branst',
      classes: ['banger', 'alloy'],
    },
    {
      date: new Temporal.PlainDate(2024, 12, 8),
      location: 'Lobith',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2024, 12, 15),
      location: 'Marrum',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2024, 12, 28),
      location: 'Venray',
      classes: ['banger', 'micra'],
    },
    {
      date: new Temporal.PlainDate(2024, 12, 29),
      location: 'Lobith',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 1, 5),
      location: 'Venray',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 1, 5),
      location: 'Branst',
      classes: ['banger', 'caravan'],
    },
    {
      date: new Temporal.PlainDate(2025, 1, 12),
      location: 'Marrum',
      classes: ['banger', 'f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 1, 25),
      location: 'Venray',
      classes: ['banger', 'micra'],
    },
    {
      date: new Temporal.PlainDate(2025, 1, 26),
      location: 'Lobith',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 2, 2),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 2, 9),
      location: 'Marrum',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 2, 16),
      location: 'Venray',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 2, 22),
      location: 'Lobith',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 3, 9),
      location: 'Marrum',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 3, 16),
      location: 'Venray',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 3, 2),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 4, 6),
      location: 'Marrum',
      classes: ['f1'],
    },
    {
      date: new Temporal.PlainDate(2025, 4, 6),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 7, 11),
      location: 'Marrum',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 9, 14),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 10, 5),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 11, 16),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 12, 14),
      location: 'Branst',
      classes: ['banger'],
    },
  ];
}
