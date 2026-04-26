import Image from "next/image";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";
import styles from "../site.module.css";

export const metadata = createMetadata({
  title: "About Us | Public Organization",
  description:
    "Read the story, philosophy, and artistic approach behind the Public Organization collective.",
  path: "/about-us",
  keywords: ["about public organization", "creative philosophy", "art collective story"],
});

export default function AboutUsPage() {
  return (
    <Section eyebrow="About Us" title="A practice of listening with space">
      <div className={styles.splitGrid}>
        <article className={styles.storyText}>
          <h1>We build emotionally precise environments through sound and visual form.</h1>
          <p>
            Founded as an interdisciplinary collective, Public Organization investigates how
            architecture, performance and music can share a common narrative language.
          </p>
          <p>
            Our work values restraint over spectacle: fewer elements, deeper intention, stronger
            memory.
          </p>
        </article>
        <div className={styles.imageFrame}>
          <Image
            src="https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1400&q=80"
            alt="Studio rehearsal during an experimental music session"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
