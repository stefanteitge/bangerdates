import { getClassNameById } from '@/app/lib/class-repository';

function getClassName(text: string): string {
  // TODO: make text a key
  return 'badge-' + text;
}

export function Badge({ text }: { text: string }) {
  return <span className={`${getClassName(text)} badge`}>{getClassNameById(text)}</span>;
}
