import { EventSections } from '@/components/EventsSections/EventSections';
import { createMetadata, siteConfig } from '@/lib/seo';
import { events } from '@/components/EventsSections/constants/events';

export const metadata = createMetadata({
    title: 'Events | Public Organization',
    description:
        'View the timeline of upcoming and recent performances, exhibitions, and cross-disciplinary events.',
    path: '/events',
    keywords: [
        'art events',
        'music performances',
        'exhibitions',
        'event timeline',
    ],
});

export default function EventsPage() {
    return (
        <>
            <EventSections />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        events.map((event) => ({
                            '@context': 'https://schema.org',
                            '@type': 'Event',
                            name: event.title,
                            startDate: event.isoDate,
                            eventStatus:
                                'https://schema.org/EventScheduled',
                            location: {
                                '@type': 'Place',
                                name: event.location,
                            },
                            organizer: {
                                '@type': 'Organization',
                                name: siteConfig.name,
                                url: `${siteConfig.url}/events`,
                            },
                            description: event.description,
                        })),
                    ),
                }}
            />
        </>
    );
}