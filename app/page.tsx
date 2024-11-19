import {getDates, listRaceSundays, RaceMeeting} from "@/app/lib/dates";

interface MyDateProps {
    meeting: RaceMeeting,
}

export function MyDate({meeting} : MyDateProps) {
    return <div>{meeting.date.toLocaleString()} {meeting.location}</div>
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {getDates().map(x => <MyDate meeting={x} />)}

          <table>
            <tbody>
              {listRaceSundays().map(s => <tr key={s.toLocaleString()}><td>{s.toLocaleString()}</td></tr>)}
            </tbody>
          </table>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Just banger dates. And maybe some stock car dates too.
      </footer>
    </div>
  );
}

