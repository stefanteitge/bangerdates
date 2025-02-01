import { listArchivedRaceDays2, listUpcomingRaceDays2 } from '@/app/lib/race-repository';
import ical, { ICalCalendarMethod } from 'ical-generator';
export const dynamic = 'force-static';

export async function GET() {
  const calendar = ical({ name: 'Banger dates' });

  const raceDays = [...listUpcomingRaceDays2(), ...listArchivedRaceDays2()];

  raceDays
    .filter((r) => r.race)
    .forEach((r) => {
      calendar.createEvent({
        start: r.date.toLocaleString(),
        summary: 'Race in ' + r.race?.location,
        location: r.race?.location,
        allDay: true,
      });
    });

  // A method is required for outlook to display event as an invitation
  calendar.method(ICalCalendarMethod.PUBLISH);

  return new Response(calendar.toString(), {
    status: 200,
  });
}
