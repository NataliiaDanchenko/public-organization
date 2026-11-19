import { notFound } from "next/navigation";
import { events } from "@/components/EventsSections/constants/events";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import styles from "./EventDetails.module.scss";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.meta}>{event.date}</p>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.location}>{event.location}</p>
        <p className={styles.description}>{event.description}</p>
      </header>

      <ImageGallery
        images={event.posters}
        title="Posters"
        imageType="Poster"
      />

      <ImageGallery
        images={event.photos}
        title="Photos"
        imageType="Photo"
      />
    </main>
  );
}