import { Metadata } from "next";
import { ContactUs } from "./_components/main";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us. Reach out for inquiries, collaborations, or to learn more about our programs empowering women, youth, and communities.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactUs />
    </main>
  );
}
