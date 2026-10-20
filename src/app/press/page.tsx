import PressSections from "@/components/PressSections/PressSections";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Press | Public Organization",
  description:
    "Explore educational and collaborative programs focused on composition, listening practice, and visual narrative.",
  path: "/press",
  keywords: ["press", "music workshops", "artist mentorship", "education"],
});

export default function PressPage() {
  return (
    <>
      <PressSections />
    </>
  );
}
