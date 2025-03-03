import { Form } from "@/components/common/contact-form";
import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";

export const ContactUs = () => {
  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16">
        <div className="md:col-span-6 text-sm space-y-8">
          <div className="space-y-6">
            <p>
              We’d love to hear from you! Whether you have questions, ideas,
              comments, or suggestions, we are here to listen.
            </p>
            <p>
              <strong>Call</strong>:{" "}
              <a href="tel:+2348037864683">+234 803 7864 683</a>
            </p>
            <p>
              <strong>Email</strong>: <a href="mailto:">onyekazita@gmail.com</a>
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-red-700 uppercase">
              Send Us A Message
            </h2>

            <p>
              Have a specific inquiry or want to collaborate? Fill out the form
              below, and we’ll get back to you as soon as possible.
            </p>
            <Form />
          </div>
        </div>

        <div className="md:col-span-4 relative">
          <div className="md:sticky top-10 gap-12 flex flex-col-reverse md:flex-col">
            <QuickCTALinks />
            <SocialShareButtons title="Learn about the Zita-Onyeka Foundation’s mission, vision, and values. Discover how we empower women, youth, and communities through education, skill development, and sustainable initiatives." />
          </div>
        </div>
      </div>
    </section>
  );
};
