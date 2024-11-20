import { Badge } from '@/app/lib/badge';
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
        className="mr-0.5 inline"
        src={addBasePath('/flags/' + getFlagCode(race.location) + '.svg')}
        width={24}
        height={24}
        alt="Flag"
      />{' '}
      <div className="mr-1 inline-block sm:min-w-24">{race.location} </div>
      <div className="sm:inline-block">
        {race.classes.map((c) => (
          <Badge text={c} key={c} />
        ))}
      </div>
    </div>
  );
}

function RaceDayRow({ day }: MyRaceDayProps) {
  return (
    <tr key={day.date.toLocaleString()}>
      <td className="border bg-slate-50 p-2">{day.date.toLocaleString()}</td>
      <td className="space-y-2 border bg-slate-50 p-2">
        {day.races.length == 0 ? (
          <div className="italic text-gray-600">No races announced yet.</div>
        ) : (
          day.races.map((r) => <MyRaceMeeting key={r.location} race={r} />)
        )}
      </td>
      <td className="border bg-slate-50 p-2">{day.date.dayOfWeek == 6 ? 'Saturday' : ''}</td>
    </tr>
  );
}

function RaceTable({ days }: { days: RaceDay[] }) {
  return (
    <table className="table-auto border-collapse">
      <thead>
        <tr>
          <th className="border bg-slate-300 p-2">Date</th>
          <th className="border bg-slate-300 p-2">Races</th>
          <th className="border bg-slate-300 p-2">Info</th>
        </tr>
      </thead>
      <tbody>
        {days.map((d) => (
          <RaceDayRow key={d.date.toString()} day={d} />
        ))}
      </tbody>
    </table>
  );
}

export default function Home() {
  return (
    <div className="items-top grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-0 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <h1 className="text-5xl font-extrabold">Banger dates </h1>
        <div className="mb-4 text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <h2 className="text-3xl font-extrabold">Upcoming races</h2>
        <RaceTable days={listUpcomingRaceDays()} />
        <h2 className="text-3xl font-extrabold">Archived races</h2>
        <RaceTable days={listArchivedRaceDays()} />
      </main>
      <footer className="row-start-3 mt-8 flex flex-wrap items-center justify-center gap-8 text-slate-600">
        <span>Made by Stefan Teitge</span>
        <span>2024</span>
        <a href="https://github.com/stefanteitge/bangerdates">Contribute at Github</a>
      </footer>
    </div>
  );
}
