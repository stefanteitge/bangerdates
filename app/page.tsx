'use client';

import { listArchivedRaceDays, listUpcomingRaceDays, RaceDay } from '@/app/lib/dates';
import RaceTable from '@/app/lib/race-table';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(Array<RaceDay>);
  const [data2, setData2] = useState(Array<RaceDay>);

  useEffect(() => {
    setData(listUpcomingRaceDays());
    setData2(listArchivedRaceDays());
  }, []);

  return (
    <div className="items-top grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-0 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <h1 className="text-5xl font-extrabold">Banger dates </h1>
        <div className="mb-4 text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <h2 className="text-3xl font-extrabold">Upcoming races</h2>
        <RaceTable days={data} />
        <h2 className="text-3xl font-extrabold">Archived races</h2>
        <RaceTable days={data2} />
      </main>
      <footer className="row-start-3 mt-8 flex flex-wrap items-center justify-center gap-8 text-slate-600">
        <span>Made by Stefan Teitge</span>
        <span>2024</span>
        <a href="https://github.com/stefanteitge/bangerdates">Contribute at Github</a>
      </footer>
    </div>
  );
}
