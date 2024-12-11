'use client';

import { listUpcomingRaceDays } from '@/app/lib/race-repository';
import { useEffect, useState } from 'react';
import { RaceDay } from './lib/types';
import RaceList from './lib/ui/race-list';

export default function Home() {
  const [data, setData] = useState(Array<RaceDay>);

  useEffect(() => {
    setData(listUpcomingRaceDays());
  }, []);

  return (
    <div className="content">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <h1 className="text-5xl font-extrabold">Banger dates </h1>
        <div className="mb-4 text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <h2 className="text-3xl font-extrabold">Upcoming races</h2>
        <RaceList days={data} />
      </main>
    </div>
  );
}
