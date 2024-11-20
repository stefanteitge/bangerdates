export function expandClassTag(tag: string): string {
  switch (tag) {
    case 'banger':
      return 'Banger';
    case 'alloy':
      return 'Alloys';
    case 'f1':
      return '1:12 F1 Stock Cars';
    case 'f2':
      return '1:12 F1 Stock Cars';
    case 'micra':
      return 'Micra Stocks';
    case 'caravan':
      return 'Caravan';
    case 'swb':
      return 'SWB Stocks';
  }

  return tag;
}

export function getClassColor(tag: string): string {
  switch (tag) {
    case 'banger':
      return 'bg-red-100';
    case 'alloy':
      return 'bg-red-200';
    case 'f1':
      return 'bg-orange-100';
    case 'f2':
      return 'bg-orange-100';
  }

  return 'bg-gray-100';
}
