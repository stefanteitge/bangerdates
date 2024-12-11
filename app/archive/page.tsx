'use client';

import { listArchivedRaceDays } from '@/app/lib/race-repository';
import { useEffect, useState } from 'react';
import { RaceDay } from '../lib/types';
import RaceList from '../lib/ui/race-list';

export default function Home() {
  const [data2, setData2] = useState(Array<RaceDay>);

  useEffect(() => {
    setData2(listArchivedRaceDays());
  }, []);

  return (
    <div className="content">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <h1 className="text-5xl font-extrabold">Banger dates </h1>
        <div className="mb-4 text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <h2 className="text-3xl font-extrabold">Archived races</h2>
        <RaceList days={data2} />
      </main>
    </div>
  );
}
