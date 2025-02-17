export function getFlagCode(locationName: string): string {
  if (locationName == 'Branst' || locationName == 'Ronse') {
    return 'be';
  }

  const nl = ['Marrum', 'Lobith', 'Venray', 'Hengelo', 'Nijkerk'];

  if (nl.find((loc) => loc == locationName)) {
    return 'nl';
  }

  if (locationName == 'Halle') {
    return 'de';
  }

  return 'eu';
}
