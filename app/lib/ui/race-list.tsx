import { Badge } from '@/app/lib/ui/badge';
import Flag from '@/app/lib/ui/flag';
import { RaceDay2 } from '../types';

function RaceDayRow({ day }: { day: RaceDay2 }) {
  return (
    <div className="grid grid-cols-8 rounded bg-slate-200 p-2 shadow-md ring-1 ring-inset ring-slate-300">
      <div>{day.race ? <Flag race={day.race} /> : ''}</div>

      <div className="col-span-7 flex flex-col gap-2">
        <div className="">
          {day.date.toLocaleString()}{' '}
          {day.race != null ? <span className="mb-1 text-lg">{day.race.location}</span> : ''}
        </div>

        {day.race == null ? (
          <div className="italic text-gray-600">No races announced yet.</div>
        ) : (
          <div className="flex flex-row gap-1">
            {day.race.classes.map((c) => (
              <Badge clazz={c} key={c.id} />
            ))}
          </div>
        )}

        {day.date.dayOfWeek == 6 && day.race ? (
          <div className="font-semibold text-red-500">Saturday</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default function RaceList({ days }: { days: RaceDay2[] }) {
  return (
    <div className="flex min-w-96 flex-col gap-4">
      {days.map((d) => (
        <RaceDayRow key={d.date.toString() + (d.race ? d.race.location : 'none')} day={d} />
      ))}
    </div>
  );
}
