import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";

export const Main = () => {
  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16">
        <div className="md:col-span-6 text-sm space-y-8">
          <div className="space-y-6">
            <h2 className="font-bold text-red-700 uppercase">Who We Are</h2>
            <p>
              At the Zita-Onyeka Foundation (ZOF), we believe in the power of
              community, the potential of youth, and the strength of women.
              Founded with a vision to create lasting change, we are a
              non-profit organization dedicated to empowering individuals and
              transforming communities.
            </p>
            <p>
              Our mission is simple yet profound: to provide opportunities,
              resources, and support that enable youth and women to thrive. We
              focus on education, skill development, and community initiatives
              that foster growth, equality, and sustainability.
            </p>
            <p>
              We are more than just an organization—we are a movement. A
              movement driven by compassion, fueled by hope, and committed to
              building a brighter future for all.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-red-700 uppercase">Our Story </h2>

            <p>
              The Zita-Onyeka Foundation was born out of a deep desire to make a
              difference. Inspired by the resilience and potential of
              underserved communities, we set out to create a platform where
              everyone, regardless of their background, could access the tools
              they need to succeed.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-red-700 uppercase">What We Do</h2>

            <p>We focus on three core areas:</p>
            <ol className="list-disc leading-loose pl-4">
              <li>
                <strong>Empowering Youth</strong>:
                <p>
                  Your contribution will directly impact the lives of
                  individuals and communities in need.
                </p>
              </li>

              <li>
                <strong>Supporting Women</strong>:
                <p>
                  Women are the backbone of society. We provide women with
                  access to education, vocational training, and resources to
                  help them achieve financial independence and personal growth.
                </p>
              </li>

              <li>
                <strong>Building Communities</strong>:
                <p>
                  Strong communities are the foundation of a better world. We
                  work hand-in-hand with local leaders to implement projects
                  that improve access to healthcare, clean water, and
                  sustainable livelihoods.
                </p>
              </li>
            </ol>
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
