import ProjectsSections from "@/components/ProjectsSections/ProjectsSections";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects | Public Organization",
  description: "Our projects and releases.",
  path: "/projects",
  keywords: ["projects", "releases"],
});

export default function ProjectsPage() {
  return <ProjectsSections />;
}
