'use client';

import { listUpcomingRaceDays2 } from '@/app/lib/race-repository';
import { useEffect, useState } from 'react';
import { RaceDay2 } from './lib/types';
import RaceList from './lib/ui/race-list';

export default function Home() {
  const [data, setData] = useState(Array<RaceDay2>);

  useEffect(() => {
    setData(listUpcomingRaceDays2());
  }, []);

  return (
    <div className="content">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <h1 className="text-5xl font-extrabold">RC Banger and Stock Car Dates</h1>
        <div className="mb-4 text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <RaceList days={data} />
      </main>
    </div>
  );
}
