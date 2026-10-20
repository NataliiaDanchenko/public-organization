import Image from "next/image";
import styles from "./Cards.module.css";

type ProjectCardProps = {
  cover: string;
  title: string;
  year: string;
  description: string;
};

export function ProjectCard({
  cover,
  title,
  year,
  description,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={cover} alt={`${title} cover`} fill sizes="(max-width: 980px) 50vw, 33vw" />
      </div>
      <div className={styles.content}>
        <p className={styles.meta}>{year}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
