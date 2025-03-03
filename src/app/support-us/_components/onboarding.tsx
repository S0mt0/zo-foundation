import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";
import { SupportForm } from "./form";

export const Onboarding = () => {
  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16">
        <div className="md:col-span-6 text-sm space-y-8">
          <div className="space-y-6">
            <h2 className="font-bold text-red-700 uppercase">
              Become a Volunteer
            </h2>
            <p>
              Are you passionate about making a difference? Do you believe in
              the power of community and the potential of youth and women? If
              you’re aged 18 or above and eager to contribute your time and
              skills, we invite you to join us as a volunteer at the Zita-Onyeka
              Foundation (ZOF).
            </p>
            <p>As a volunteer, you’ll have the opportunity to:</p>
            <ul className="list-disc leading-loose pl-4">
              <li>
                <strong>Empower Youth</strong>: Mentor young people, help them
                build skills, and guide them toward a brighter future.
              </li>
              <li>
                <strong>Support Women</strong>: Assist in programs that promote
                education, financial independence, and personal growth for
                women.
              </li>
              <li>
                <strong>Strengthen Communities</strong>: Participate in
                initiatives that improve access to healthcare, clean water, and
                sustainable livelihoods.
              </li>
            </ul>

            <p>
              Your time and effort can create a lasting impact. Together, we can
              break the cycle of poverty and build stronger, more vibrant
              communities.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-red-700 uppercase">
              Why Volunteer with Us?
            </h2>

            <p>As a volunteer, you’ll have the opportunity to:</p>
            <ul className="list-disc leading-loose pl-4">
              <li>
                <strong>Make a Difference</strong>: Your contribution will
                directly impact the lives of individuals and communities in
                need.
              </li>
              <li>
                <strong>Grow Personally and Professionally</strong>: Gain
                valuable experience, develop new skills, and connect with
                like-minded individuals.
              </li>
              <li>
                <strong>Be Part of a Movement</strong>: Join a team of dedicated
                individuals who are committed to creating positive change.
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-red-700 uppercase">
              How to Get Started
            </h2>

            <p>
              If you’re ready to take the first step, we’d love to hear from
              you! Reach out to us to get started or to learn more about
              volunteer opportunities.
            </p>
            <SupportForm />
          </div>
        </div>

        <div className="md:col-span-4 relative">
          <div className="sticky top-10 gap-12 flex flex-col-reverse md:flex-col">
            <QuickCTALinks />
            <SocialShareButtons title="Support Zita-Onyeka Foundation (ZOF) today!" />
          </div>
        </div>
      </div>
    </section>
  );
};
