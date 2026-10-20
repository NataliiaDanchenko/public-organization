import { Section } from "@/components/Sections/Section";
import { createMetadata } from "@/lib/seo";
import styles from "../site.module.css";
import AboutSections from "@/components/AboutSections/AboutSections";

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
        <AboutSections/>
      </div>
    </Section>
  );
}
