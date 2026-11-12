
import Image from "next/image";
import { notFound } from "next/navigation";

import { releases } from "@/components/ProjectsSections/constants/releases";
import styles from "./ProjectDetails.module.scss";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return releases.map((release) => ({
    slug: release.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const release = releases.find((item) => item.slug === slug);

  if (!release) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <p className={styles.year}>{release.year}</p>

        <h1 className={styles.title}>{release.title}</h1>

        <div className={styles.imageWrap}>
          <Image
            src={release.cover}
            alt={release.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        <div className={styles.content}>
          <p>{release.content}</p>
        </div>
      </div>
    </main>
  );
}
