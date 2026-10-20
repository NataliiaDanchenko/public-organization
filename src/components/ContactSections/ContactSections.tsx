import { Section } from '@/components/Sections/Section';

import styles from './ContactSections.module.css';
import { ContactForm } from '../ContactForm/ContactForm';

export function ContactSections() {
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