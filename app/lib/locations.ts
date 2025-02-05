export function getFlagCode(locationName: string): string {
  if (locationName == 'Branst' || locationName == 'Ronse') {
    return 'be';
  }

  if (locationName == 'Marrum'
    || locationName == 'Lobith'
    || locationName == 'Venray'
    || locationName == 'Hengelo') {
    return 'nl';
  }

  if (locationName == 'Halle') {
    return 'de';
  }

  return 'eu';
}
