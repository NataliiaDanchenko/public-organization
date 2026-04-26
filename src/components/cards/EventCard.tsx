import styles from "./Cards.module.css";

type EventCardProps = {
  date: string;
  title: string;
  location: string;
  description: string;
};

export function EventCard({ date, title, location, description }: EventCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <p className={styles.meta}>{date}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>{location}</p>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
