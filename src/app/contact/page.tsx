import { createMetadata } from "@/lib/seo";
import { ContactSections } from "@/components/ContactSections/ContactSections";

export const metadata = createMetadata({
  title: "Contact | Public Organization",
  description:
    "Get in touch with Public Organization for collaborations, bookings, and program inquiries.",
  path: "/contact",
  keywords: ["contact", "booking", "collaboration", "artist inquiry"],
});

export default function ContactPage() {
  return (
    <>
      <ContactSections />
    </>
  );
}
