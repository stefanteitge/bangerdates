import { RaceClass } from '@/app/lib/types';

function getClassName(text: string): string {
  // TODO: make text a key
  return 'badge-' + text;
}

export function Badge({ clazz }: { clazz: RaceClass }) {
  return <span className={`${getClassName(clazz.id)} badge`}>{clazz.name}</span>;
}
