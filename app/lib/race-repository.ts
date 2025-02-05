import { Temporal } from 'temporal-polyfill';
import { RaceDay2 } from './types';
import { getRaces } from './data/races';
import { getClassNameById } from '@/app/lib/class-repository';

function getNextSunday(): Temporal.PlainDate {
  const today = Temporal.Now.plainDateISO();
  return today.add(Temporal.Duration.from({ days: 7 - today.dayOfWeek }));
}

export function listUpcomingRaceDays2(): RaceDay2[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays2().filter((d) => Temporal.PlainDate.compare(now, d.date) <= 0);
}

export function listArchivedRaceDays2(): RaceDay2[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays2().filter((d) => Temporal.PlainDate.compare(now, d.date) > 0);
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

  const days = getRaces().map(
    (r) =>
      <RaceDay2>{
        date: r.date,
        race: {
          date: r.date,
          location: r.location,
          classes: r.classes.map((c) => getClassNameById(c)),
        },
      },
  );

  nextDates.forEach((d) => {
    const myDay = days.find((rd) => rd.date.equals(d));
    if (!myDay) {
      days.push(<RaceDay2>{ date: d, race: null });
    }
  });

  return days.sort((a, b) => Temporal.PlainDate.compare(a.date, b.date));
}
