import Link from "next/link";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";
import styles from "./site.module.css";

export const metadata = createMetadata({
  title: "Home | Public Organization",
  description:
    "Discover a minimalist portfolio of contemporary sound and visual art projects by Public Organization.",
  path: "/",
  keywords: ["art collective", "sound art", "portfolio website", "creative direction"],
});

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Art, resonance, and contemporary ritual in motion.</h1>
          <p className={styles.lead}>
            Public Organization curates albums, performances and educational programs where
            sound becomes architecture and image becomes memory.
          </p>
          <Link href="/discography" className={styles.cta}>
            Explore
          </Link>
        </div>
      </section>

      <Section eyebrow="Highlights" title="A living archive of work">
        <div className={styles.splitGrid}>
          <article>
            <h3>Discography</h3>
            <p className={styles.lead}>
              Immersive releases blending ambient forms, spoken textures and cinematic structure.
            </p>
            <Link href="/discography" className={styles.cta}>
              View releases
            </Link>
          </article>
          <article>
            <h3>Events</h3>
            <p className={styles.lead}>
              Site-specific performances and collaborative exhibitions across Europe.
            </p>
            <Link href="/events" className={styles.cta}>
              Upcoming events
            </Link>
          </article>
        </div>
      </Section>
    </>
  );
}
