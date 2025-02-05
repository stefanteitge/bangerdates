import { getFlagCode } from '@/app/lib/locations';
import { addBasePath } from 'next/dist/client/add-base-path';
import Image from 'next/image';
import { RaceMeeting2 } from '../types';

export default function Flag({ race }: { race: RaceMeeting2 }) {
  return (
    <Image
      className="inline rounded border border-slate-500"
      src={addBasePath('/flags/' + getFlagCode(race.location) + '.svg')}
      width={24}
      height={24}
      alt="Flag"
    />
  );
}
