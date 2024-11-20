import { expandClassTag } from '@/app/lib/classes';
import { listArchivedRaceDays, listUpcomingRaceDays, RaceDay, RaceMeeting } from '@/app/lib/dates';
import { getFlagCode } from '@/app/lib/locations';
import { addBasePath } from 'next/dist/client/add-base-path';
import Image from 'next/image';

interface MyDateProps {
  race: RaceMeeting;
}

interface MyRaceDayProps {
  day: RaceDay;
}

function MyRaceMeeting({ race }: MyDateProps) {
  return (
    <div>
      <Image
        className="inline"
        src={addBasePath('/flags/' + getFlagCode(race.location) + '.svg')}
        width={20}
        height={20}
        alt="Picture of the author"
      />{' '}
      {race.location}{' '}
      {race.classes.map((c) => (
        <Badge text={c} key={c} />
      ))}
    </div>
  );
}

function MyRaceDay({ day }: MyRaceDayProps) {
  return day.races.length == 0 ? (
    <div className="italic">No races announced yet.</div>
  ) : (
    day.races.map((r) => <MyRaceMeeting key={r.location} race={r} />)
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {expandClassTag(text)}
    </span>
  );
}

function RaceTable({ days }: { days: RaceDay[] }) {
  return (
    <table className="table-auto border-collapse">
      <thead>
        <tr>
          <th className="border bg-slate-200 p-2">Date</th>
          <th className="border bg-slate-200 p-2">Races</th>
          <th className="border bg-slate-200 p-2">Info</th>
        </tr>
      </thead>
      <tbody>
        {days.map((d) => (
          <tr key={d.date.toLocaleString()}>
            <td className="border p-2">{d.date.toLocaleString()}</td>
            <td className="space-y-2 border p-2">
              <MyRaceDay day={d} />
            </td>
            <td className="border p-2">{d.date.dayOfWeek == 6 ? 'Saturday' : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Home() {
  return (
    <div className="items-top grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-5xl font-extrabold">Banger dates </h1>
        <div className="text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <h2 className="text-3xl font-extrabold">Upcoming races</h2>
        <RaceTable days={listUpcomingRaceDays()} />
        <h2 className="text-3xl font-extrabold">Archived races</h2>
        <RaceTable days={listArchivedRaceDays()} />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        Just banger dates. And maybe some stock car dates too.
      </footer>
    </div>
  );
}
