import { Temporal } from "temporal-polyfill";

export interface RaceMeeting {
    date: Temporal.PlainDate,
    location: string,
    classes: string[]
}

export function getDates(): RaceMeeting[] {
    return [
        {
            date: new Temporal.PlainDate(2024, 11, 17),
            location: "Ronse",
            classes: ["banger"]
        },
        {
            date: new Temporal.PlainDate(2024, 11, 17),
            location: "Marrum",
            classes: ["banger"]
        },
        {
            date: new Temporal.PlainDate(2024, 12, 1),
            location: "Branst",
            classes: ["banger"]
        },
        {
            date: new Temporal.PlainDate(2024, 12, 28),
            location: "Venray",
            classes: ["banger", "micra"]
        }
    ]
}

// TODO: does not take Sunday into account
export function listRaceSundays(): Temporal.PlainDate[] {
    const today = Temporal.Now.plainDateISO();
    const raceDates=  getDates().map(d => d.date);
    return [today, today.add(Temporal.Duration.from({days: 7})), ...uniqueDates(raceDates)]
}

function uniqueDates(dates: Temporal.PlainDate[]): Temporal.PlainDate[] {
    return [...new Map(dates.map(item => [item.toString(), item])).values()];
}