import getClasses from './data/classes';
import { RaceClass } from '@/app/lib/types';

export function getClassNameById(classId: string): RaceClass {
  const clazz = getClasses().find((c) => c.id == classId);

  if (clazz) {
    return clazz;
  }

  return { id: classId, name: 'Unknown' };
}
