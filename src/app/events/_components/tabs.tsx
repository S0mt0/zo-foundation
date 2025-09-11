"use client";
import { EventCard } from "@/components/common/event-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUpdateSearchParams } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Props = {
  events: IEvent[];
  status: PublicEventStatus;
};

const tabs = ["completed", "happening", "upcoming"];

export const EventsTabs = ({ events, status }: Props) => {
  const { updateSearchParams } = useUpdateSearchParams("events");

  return (
    <Tabs value={status} className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8 bg-transparent border-b rounded-none p-0 gap-6">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="relative h-full capitalize shadow-none text-start font-extrabold block outline-none px-0 py-2 focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:text-orange-500 text-black"
            onClick={() => updateSearchParams({ status: tab })}
          >
            {tab}
            <div
              className={cn(
                "absolute bottom-0 h-px bg-orange-500 w-full hidden",
                status === tab && "block"
              )}
            />
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={status}>
        {events.map((event) => (
          <EventCard
            key={event.slug}
            {...event}
            showExcerpt
            showExpired
            className="border-none hover:shadow-none"
          />
        ))}
      </TabsContent>
    </Tabs>
  );
};
