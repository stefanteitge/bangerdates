import getClasses from './data/classes';

export function getClassNameById(classId: string): string {
  const clazz = getClasses().find((c) => c.id == classId);

  if (clazz) {
    return clazz.name;
  }

  return 'Unknown';
}
