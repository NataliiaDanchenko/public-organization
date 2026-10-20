import Image from "next/image";
import styles from "./Cards.module.css";

type PressCardProps = {
  title: string;
  description: string;
  image: string;
};

export function PressCard({ title, description, image }: PressCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={image} alt={title} fill sizes="(max-width: 980px) 50vw, 33vw" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
