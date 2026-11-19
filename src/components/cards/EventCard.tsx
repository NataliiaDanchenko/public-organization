import Link from "next/link";
import styles from "./Cards.module.css";

type EventCardProps = {
  slug: string;
  date: string;
  title: string;
  location: string;
  description: string;
};

export function EventCard({
  slug,
  date,
  title,
  location,
  description,
}: EventCardProps) {
  return (
    <Link href={`/events/${slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.content}>
          <p className={styles.meta}>{date}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.meta}>{location}</p>
          <p className={styles.desc}>{description}</p>
        </div>
      </article>
    </Link>
  );
}