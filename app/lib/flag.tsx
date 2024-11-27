import { RaceMeeting } from '@/app/lib/dates';
import { getFlagCode } from '@/app/lib/locations';
import { addBasePath } from 'next/dist/client/add-base-path';
import Image from 'next/image';

export default function Flag({ race }: { race: RaceMeeting }) {
  return (
    <Image
      className="mr-0.5 inline"
      src={addBasePath('/flags/' + getFlagCode(race.location) + '.svg')}
      width={24}
      height={24}
      alt="Flag"
    />
  );
}
