import { ProjectCard } from '../cards/ProjectCard';
import { Section } from '../Sections/Section';
import { releases } from './constants/releases';
import styles from './ProjectsSections.module.css';
import { siteConfig } from '@/lib/seo';
import cardStyles from "@/components/cards/Cards.module.css";


export default function ProjectsSections() {

    return (

        <>
            <Section eyebrow="Projects" title="Selected releases">
                <h1 className={styles.pageTitle}>Projects</h1>
                <div className={cardStyles.grid}>
                    {releases.map((release) => (
                        <ProjectCard key={release.title} {...release} />
                    ))}
                </div>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MusicGroup",
                            name: "Public Organization",
                            url: `${siteConfig.url}/projects`,
                            album: releases.map((release) => ({
                                "@type": "MusicAlbum",
                                name: release.title,
                                datePublished: release.year,
                                description: release.description,
                            })),
                        }),
                    }}
                />
            </Section>
        </>
    )
}
