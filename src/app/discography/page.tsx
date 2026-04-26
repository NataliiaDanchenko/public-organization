import { DiscographyCard } from "@/components/cards/DiscographyCard";
import cardStyles from "@/components/cards/Cards.module.css";
import { Section } from "@/components/Section";
import { createMetadata, siteConfig } from "@/lib/seo";
import styles from "../site.module.css";

export const metadata = createMetadata({
  title: "Discography | Public Organization",
  description:
    "Browse albums and releases by Public Organization, from ambient essays to electro-acoustic narratives.",
  path: "/discography",
  keywords: ["discography", "albums", "sound releases", "music portfolio"],
});

const releases = [
  {
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    title: "Nocturnal Architectures",
    year: "2025",
    description: "A slow-burn album balancing fragile field recordings with deep tonal movement.",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=1200&q=80",
    title: "Contour of Silence",
    year: "2024",
    description: "An intimate release exploring micro-rhythm, breath, and cinematic low-frequency space.",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    title: "Parallel Rooms",
    year: "2023",
    description: "Collaborative compositions recorded in galleries and repurposed industrial interiors.",
  },
];

export default function DiscographyPage() {
  return (
    <Section eyebrow="Discography" title="Selected releases">
      <h1 className={styles.pageTitle}>Discography</h1>
      <div className={cardStyles.grid}>
        {releases.map((release) => (
          <DiscographyCard key={release.title} {...release} />
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            name: "Public Organization",
            url: `${siteConfig.url}/discography`,
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
  );
}
