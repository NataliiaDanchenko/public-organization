import { EventCard } from "@/components/cards/EventCard";
import cardStyles from "@/components/cards/Cards.module.css";
import { Section } from "@/components/Section";
import { createMetadata, siteConfig } from "@/lib/seo";
import styles from "../site.module.css";

export const metadata = createMetadata({
  title: "Events | Public Organization",
  description:
    "View the timeline of upcoming and recent performances, exhibitions, and cross-disciplinary events.",
  path: "/events",
  keywords: ["art events", "music performances", "exhibitions", "event timeline"],
});

const events = [
  {
    date: "May 18, 2026",
    isoDate: "2026-05-18",
    title: "Resonance Chambers",
    location: "Berlin, DE",
    description: "Immersive performance for modular synth, strings, and projected film textures.",
  },
  {
    date: "June 09, 2026",
    isoDate: "2026-06-09",
    title: "Night Gallery Session",
    location: "Warsaw, PL",
    description: "Site-specific night program in collaboration with local visual artists.",
  },
  {
    date: "July 02, 2026",
    isoDate: "2026-07-02",
    title: "Open Process Lab",
    location: "Lisbon, PT",
    description: "Public rehearsal and artist talk on composition, space, and sound dramaturgy.",
  },
];

export default function EventsPage() {
  return (
    <Section eyebrow="Events" title="Performances and gatherings">
      <h1 className={styles.pageTitle}>Events</h1>
      <div className={styles.verticalList}>
        {events.map((event) => (
          <div key={event.title} className={styles.eventItem}>
            <EventCard {...event} />
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            events.map((event) => ({
              "@context": "https://schema.org",
              "@type": "Event",
              name: event.title,
              startDate: event.isoDate,
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: event.location,
              },
              organizer: {
                "@type": "Organization",
                name: "Public Organization",
                url: `${siteConfig.url}/events`,
              },
              description: event.description,
            })),
          ),
        }}
      />
    </Section>
  );
}
