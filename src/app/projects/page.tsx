import ProjectsSections from "@/components/ProjectsSections/ProjectsSections";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects | Public Organization",
  description:
    "Browse albums and releases by Public Organization, from ambient essays to electro-acoustic narratives.",
  path: "/projects",
  keywords: ["projects", "albums", "sound releases", "music portfolio"],
});


export default function ProjectsPage() {
  return (
    <ProjectsSections/>
  );
}
