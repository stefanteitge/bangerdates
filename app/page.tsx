import {expandClassTag} from "@/app/lib/classes";
import {listArchivedRaceDays, listUpcomingRaceDays, RaceDay, RaceMeeting} from "@/app/lib/dates";

interface MyDateProps {
    meeting: RaceMeeting
}

interface MyRaceDayProps {
    day: RaceDay
}

export function MyRaceMeeting({meeting}: MyDateProps) {
    return <div>{meeting.location} {meeting.classes.map(c => <Badge text={c}/>)}</div>;
}

export function MyRaceDay({day}: MyRaceDayProps) {
    return day.races.length == 0 ? <div className="italic">No races announced yet.</div> : day.races.map(r => <MyRaceMeeting
        meeting={r}/>);
}

function Badge({text}: {text: string}) {
    return <span
        className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{expandClassTag(text)}</span>;
}

function RaceTable({days}: {days: RaceDay[]}) {
    return <table className="table-auto border-collapse">
        <thead>
        <tr>
            <th className="border p-2 bg-slate-200">Date</th>
            <th className="border p-2 bg-slate-200">Races</th>
            <th className="border p-2 bg-slate-200">Info</th>
        </tr>
        </thead>
        <tbody>
        {days.map(d => <tr key={d.date.toLocaleString()}>
            <td className="border p-2">{d.date.toLocaleString()}</td>
            <td className="border p-2 space-y-2"><MyRaceDay day={d}/></td>
            <td className="border p-2">{d.date.dayOfWeek == 6 ? "Saturday" : ""}</td>
        </tr>)}
        </tbody>
    </table>
}

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-5xl font-extrabold">Banger dates </h1>
                <div className="text-2xl italic text-neutral-500">Belgium & Netherlands</div>
                <h2 className="text-3xl font-extrabold">Upcoming races</h2>
                <RaceTable days={listUpcomingRaceDays()}/>
                <h2 className="text-3xl font-extrabold">Archived races</h2>
                <RaceTable days={listArchivedRaceDays()}/>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                Just banger dates. And maybe some stock car dates too.
            </footer>
        </div>
    );
}

