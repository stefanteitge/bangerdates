import { Badge } from '@/app/lib/ui/badge';
import Flag from '@/app/lib/ui/flag';
import { RaceDay, RaceMeeting } from '../types';

function LocationCell({ race }: { race: RaceMeeting }) {
  return (
    <div>
      <Flag race={race} /> <div className="mr-1 inline-block sm:min-w-24">{race.location} </div>
      <div className="sm:inline-block">
        {race.classes.map((c) => (
          <Badge text={c} key={c} />
        ))}
      </div>
    </div>
  );
}

function RaceDayRow({ day }: { day: RaceDay }) {
  return (
    <tr key={day.date.toLocaleString()}>
      <td className="border bg-slate-50 p-2">{day.date.toLocaleString()}</td>
      <td className="space-y-2 border bg-slate-50 p-2">
        {day.races.length == 0 ? (
          <div className="italic text-gray-600">No races announced yet.</div>
        ) : (
          day.races.map((r) => <LocationCell key={r.location} race={r} />)
        )}
      </td>
      <td className="border bg-slate-50 p-2">{day.date.dayOfWeek == 6 ? 'Saturday' : ''}</td>
    </tr>
  );
}

export default function RaceTable({ days }: { days: RaceDay[] }) {
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
