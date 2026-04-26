import type { MetadataRoute } from "next";

const baseUrl = "https://public-organization.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about-us", "/discography", "/events", "/programs", "/contact"];
  const updatedAt = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: updatedAt,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
