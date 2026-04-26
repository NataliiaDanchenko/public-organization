import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";
import styles from "../site.module.css";

export const metadata = createMetadata({
  title: "Contact | Public Organization",
  description:
    "Get in touch with Public Organization for collaborations, bookings, and program inquiries.",
  path: "/contact",
  keywords: ["contact", "booking", "collaboration", "artist inquiry"],
});

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Let us build something resonant together">
      <h1 className={styles.pageTitle}>Contact</h1>
      <div className={styles.contactGrid}>
        <ContactForm />
        <aside className={styles.storyText}>
          <h2>Direct channels</h2>
          <p>
            Email: <a href="mailto:hello@publicorganization.art">hello@publicorganization.art</a>
          </p>
          <p>
            Instagram:{" "}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              @publicorganization
            </a>
          </p>
          <p>
            SoundCloud:{" "}
            <a href="https://soundcloud.com" target="_blank" rel="noreferrer">
              Public Organization
            </a>
          </p>
        </aside>
      </div>
    </Section>
  );
}
