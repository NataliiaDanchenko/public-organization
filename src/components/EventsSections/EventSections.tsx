import { EventCard } from '@/components/cards/EventCard';
import { Section } from '@/components/Sections/Section';
import { events } from './constants/events';
import styles from './EventSections.module.css';

export function EventSections() {
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
        </Section>
    );
}