import { Badge } from '@/app/lib/ui/badge';
import Flag from '@/app/lib/ui/flag';
import { RaceDay, RaceMeeting } from '../types';

function LocationCell({ race }: { race: RaceMeeting }) {
  return (
    <div className="flex flex-col">
      <div className="mb-1 text-lg">
        <span className="mr-1">{race.location}</span>
        <Flag race={race} />
      </div>
      <div className="flex flex-row gap-1">
        {race.classes.map((c) => (
          <Badge text={c} key={c} />
        ))}
      </div>
    </div>
  );
}

function RaceDayRow({ day }: { day: RaceDay }) {
  return (
    <div
      key={day.date.toLocaleString()}
      className="grid grid-cols-3 rounded bg-slate-200 p-2 shadow-md ring-1 ring-inset ring-slate-300"
    >
      <div className="">
        {day.date.toLocaleString()}

        {day.date.dayOfWeek == 6 ? (
          <div className="col-start-1 font-semibold text-red-500">Saturday</div>
        ) : (
          ''
        )}
      </div>

      <div className="col-span-2 flex flex-col gap-2">
        {day.races.length == 0 ? (
          <div className="italic text-gray-600">No races announced yet.</div>
        ) : (
          day.races.map((r) => <LocationCell key={r.location} race={r} />)
        )}
      </div>
    </div>
  );
}

export default function RaceList({ days }: { days: RaceDay[] }) {
  return (
    <div className="flex min-w-96 flex-col gap-4">
      {days.map((d) => (
        <RaceDayRow key={d.date.toString()} day={d} />
      ))}
    </div>
  );
}
