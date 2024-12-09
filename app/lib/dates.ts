import { Temporal } from 'temporal-polyfill';

export interface RaceMeeting {
  date: Temporal.PlainDate;
  location: string;
  classes: string[];
}

export interface RaceDay {
  date: Temporal.PlainDate;
  races: RaceMeeting[];
}

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
      date: new Temporal.PlainDate(2025, 2, 2),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 3, 16),
      location: 'Branst',
      classes: ['banger'],
    },
    {
      date: new Temporal.PlainDate(2025, 4, 6),
      location: 'Branst',
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

function getNextSunday(): Temporal.PlainDate {
  const today = Temporal.Now.plainDateISO();
  return today.add(Temporal.Duration.from({ days: 7 - today.dayOfWeek }));
}

export function listUpcomingRaceDays(): RaceDay[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays().filter((d) => Temporal.PlainDate.compare(now, d.date) <= 0);
}

export function listArchivedRaceDays(): RaceDay[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays().filter((d) => Temporal.PlainDate.compare(now, d.date) > 0);
}

function listRaceDays(): RaceDay[] {
  const nextSunday = getNextSunday();
  const raceDates = getRaces().map((d) => d.date);
  const dates = [
    nextSunday,
    nextSunday.add(Temporal.Duration.from({ days: 7 })),
    nextSunday.add(Temporal.Duration.from({ days: 14 })),
    nextSunday.add(Temporal.Duration.from({ days: 21 })),
    nextSunday.add(Temporal.Duration.from({ days: 28 })),
    ...raceDates,
  ];
  const cleanedDays = uniqueDates(dates).sort(Temporal.PlainDate.compare);

  const raceDays = cleanedDays.map((d) => <RaceDay>{ date: d, races: [] });

  getRaces().forEach((r) => {
    const myDay = raceDays.find((d) => d.date.equals(r.date));
    if (myDay) {
      myDay.races.push(r);
    }
  });

  return raceDays;
}

function uniqueDates(dates: Temporal.PlainDate[]): Temporal.PlainDate[] {
  return [...new Map(dates.map((item) => [item.toString(), item])).values()];
}
