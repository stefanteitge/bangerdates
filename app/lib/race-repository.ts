import { Temporal } from 'temporal-polyfill';
import { RaceDay2 } from './types';
import { getRaces } from './data/races';
import { getClassNameById } from '@/app/lib/class-repository';

export function listUpcomingRaceDays2(): RaceDay2[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays2().filter((d) => Temporal.PlainDate.compare(now, d.date) <= 0);
}

export function listArchivedRaceDays2(): RaceDay2[] {
  const now = Temporal.Now.plainDateISO();
  return listRaceDays2().filter((d) => Temporal.PlainDate.compare(now, d.date) > 0);
}

function listRaceDays2(): RaceDay2[] {
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

  return days.sort((a, b) => Temporal.PlainDate.compare(a.date, b.date));
}
