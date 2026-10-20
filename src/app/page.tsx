import { Section } from "@/components/Sections/Section";
import { createMetadata } from "@/lib/seo";
import styles from "./site.module.css";
import Hero from "@/components/HomeSections/Hero/Hero";
import { Projects } from "@/components/HomeSections/Projects/Projects";
import { Events } from "@/components/HomeSections/Events/Events";

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
      <Hero />
      <Section eyebrow="Highlights" title="A living archive of work">
        <div className={styles.splitGrid}>
          <Projects />
          <Events />
        </div>
      </Section>
    </>
  );
}
