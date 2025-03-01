import { CTABanner } from "./_components/cta-banner";
import { FixedSocials } from "./_components/fixed-socials";
import { Hero } from "./_components/hero";
import { OurValues } from "./_components/our-values";
import { UpcomingEvents } from "./_components/upcoming-events";
import { WhoWeAre } from "./_components/who-we-are";

export default function Home() {
  return (
    <main>
      <FixedSocials />
      <Hero />
      <WhoWeAre />
      <OurValues />
      <UpcomingEvents />
      <CTABanner />
    </main>
  );
}
