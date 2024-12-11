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

export interface RaceClass {
  id: string;
  name: string;
}
