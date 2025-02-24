import { FixedSocials } from "./_components/fixed-socials";
import { Hero } from "./_components/hero";
import { SupportOurCause } from "./_components/support-our-cause-banner";

export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <FixedSocials />
      <Hero />
      <SupportOurCause />
    </main>
  );
}
