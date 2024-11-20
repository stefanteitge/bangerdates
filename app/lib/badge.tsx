import { expandClassTag } from '@/app/lib/classes';

function getClassName(text: string): string {
  // TODO: make text a key
  return 'badge-' + text;
}

export function Badge({ text }: { text: string }) {
  return <span className={`${getClassName(text)} badge`}>{expandClassTag(text)}</span>;
}
