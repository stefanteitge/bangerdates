import { Temporal } from 'temporal-polyfill';

export interface RaceMeeting {
  date: Temporal.PlainDate;
  location: string;
  classes: string[];
}

export interface RaceMeeting2 {
  date: Temporal.PlainDate;
  location: string;
  classes: RaceClass[];
}

/**
 * @deprecated The interface should not be used.
 */
export interface RaceDay {
  date: Temporal.PlainDate;
  races: RaceMeeting[];
}

export interface RaceDay2 {
  date: Temporal.PlainDate;
  race: RaceMeeting2 | null;
}

export interface RaceClass {
  id: string;
  name: string;
}
