import { Temporal } from 'temporal-polyfill';
import { RaceDay, RaceDay2 } from './types';
import { getRaces } from './data/races';

function getNextSunday(): Temporal.PlainDate {
  const today = Temporal.Now.plainDateISO();
  return today.add(Temporal.Duration.from({ days: 7 - today.dayOfWeek }));
}

export function listUpcomingRaceDays(): RaceDay[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays().filter((d) => Temporal.PlainDate.compare(now, d.date) <= 0);
}

export function listUpcomingRaceDays2(): RaceDay2[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays2().filter((d) => Temporal.PlainDate.compare(now, d.date) <= 0);
}

export function listArchivedRaceDays(): RaceDay[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays().filter((d) => Temporal.PlainDate.compare(now, d.date) > 0);
}

export function listArchivedRaceDays2(): RaceDay2[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays2().filter((d) => Temporal.PlainDate.compare(now, d.date) > 0);
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

function listRaceDays2(): RaceDay2[] {
  const nextSunday = getNextSunday();
  const nextDates = [
    nextSunday,
    nextSunday.add(Temporal.Duration.from({ days: 7 })),
    nextSunday.add(Temporal.Duration.from({ days: 14 })),
    nextSunday.add(Temporal.Duration.from({ days: 21 })),
    nextSunday.add(Temporal.Duration.from({ days: 28 })),
  ];

  const days = getRaces().map((r) => <RaceDay2>{ date: r.date, race: r });

  nextDates.forEach((d) => {
    const myDay = days.find((rd) => rd.date.equals(d));
    if (!myDay) {
      days.push(<RaceDay2>{ date: d, race: null });
    }
  });

  return days.sort((a, b) => Temporal.PlainDate.compare(a.date, b.date));
}

function uniqueDates(dates: Temporal.PlainDate[]): Temporal.PlainDate[] {
  return [...new Map(dates.map((item) => [item.toString(), item])).values()];
}
