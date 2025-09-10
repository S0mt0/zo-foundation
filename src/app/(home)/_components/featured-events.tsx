import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { EventCard } from "@/components/common/event-card";

type Props = {
  eventsDataPromise?: Promise<ApiPaginatedResponse<IEvent> | undefined>;
};

export const FeaturedEvents = async ({ eventsDataPromise }: Props) => {
  const events = (await eventsDataPromise)?.data;

  if (!events || !events.length) return null;

  return (
    <section className="py-20 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-bold text-gray-700 text-xl uppercase mb-4 flex items-center gap-2">
          <div>
            <span className="text-primary">Our</span> Events
          </div>
          <CalendarDays className="text-gray-500/60" />
        </h3>

        <div className="w-full grid gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} showExcerpt />
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/events"
            className="bg-orange-500 hover:bg-orange-500/95 transition-colors text-white py-5 px-10 font-bold"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
};
