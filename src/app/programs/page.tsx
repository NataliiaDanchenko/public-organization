import { ProgramCard } from "@/components/cards/ProgramCard";
import cardStyles from "@/components/cards/Cards.module.css";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";
import styles from "../site.module.css";

export const metadata = createMetadata({
  title: "Programs | Public Organization",
  description:
    "Explore educational and collaborative programs focused on composition, listening practice, and visual narrative.",
  path: "/programs",
  keywords: ["creative programs", "music workshops", "artist mentorship", "education"],
});

const programs = [
  {
    title: "Spatial Composition Intensive",
    description:
      "A six-week studio for composing multi-layered works tailored to architecture and gallery settings.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Listening As Method",
    description:
      "Weekly seminar on deep listening, critical attention, and score-less performance strategies.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mentored Practice Circle",
    description:
      "Individual and group mentorship for emerging artists creating interdisciplinary projects.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProgramsPage() {
  return (
    <Section eyebrow="Programs" title="Study, practice, and collaboration">
      <h1 className={styles.pageTitle}>Programs</h1>
      <div className={cardStyles.grid}>
        {programs.map((program) => (
          <ProgramCard key={program.title} {...program} />
        ))}
      </div>
    </Section>
  );
}
