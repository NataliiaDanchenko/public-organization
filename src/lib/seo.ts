import type { Metadata } from "next";

export const siteConfig = {
  name: "Public Organization",
  url: "https://public-organization.example",
  description:
    "A minimalist art and music collective featuring curated releases, live events, and educational programs.",
  defaultImage: "/og-default.jpg",
};

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export function createMetadata({
  title,
  description,
  path,
  keywords,
}: MetadataInput): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${siteConfig.defaultImage}`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${siteConfig.defaultImage}`],
    },
  };
}
