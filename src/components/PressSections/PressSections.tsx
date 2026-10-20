import { PressCard } from "../cards/PressCard";
import { Section } from "../Sections/Section";
import { programs } from "./constants/programs";
import styles from './PressSections.module.css';
import cardStyles from "@/components/cards/Cards.module.css";

export default function PressSections() {
  return (
    <Section eyebrow="Press" title="Study, practice, and collaboration">
      <h1 className={styles.pageTitle}>Press</h1>
      <div className={cardStyles.grid}>
        {programs.map((program) => (
          <PressCard key={program.title} {...program} />
        ))}
      </div>
    </Section>
  );
}