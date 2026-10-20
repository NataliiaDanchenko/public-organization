import Link from 'next/link';
import styles from './Events.module.css';

export function Events() {
    return (
        <>
           <article>
            <h3>Events</h3>
            <p className={styles.lead}>
              Site-specific performances and collaborative exhibitions across Europe.
            </p>
            <Link href="/events" className={styles.cta}>
              Upcoming events
            </Link>
          </article>
        </>
    )
}