'use client';

import { listUpcomingRaceDays } from '@/app/lib/race-repository';
import RaceTable from '@/app/lib/ui/race-table';
import { useEffect, useState } from 'react';
import { RaceDay } from './lib/types';

export default function Home() {
  const [data, setData] = useState(Array<RaceDay>);

  useEffect(() => {
    setData(listUpcomingRaceDays());
  }, []);

  return (
    <div className="items-top grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-0 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <h1 className="text-5xl font-extrabold">Banger dates </h1>
        <div className="mb-4 text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <h2 className="text-3xl font-extrabold">Upcoming races</h2>
        <RaceTable days={data} />
      </main>
    </div>
  );
}
