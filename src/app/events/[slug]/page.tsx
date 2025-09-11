import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import Image from "next/image";

import { getAllEvents, getEvent, getSiteSettings } from "@/lib/api";
import { Hero } from "@/components/common/hero";
import { capitalize, cn, formatTime } from "@/lib/utils";
import { InPageNav } from "@/components/common/in-page-nav";
import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SocialShareButtons } from "@/components/common/social-share-buttons";
import { LexicalContentDisplay } from "@/components/lexical-editor/LexicalContentDisplay";
import { Separator } from "@/components/ui/separator";
import { EventCommentForm } from "../_components/event-comment-form";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ slug: string }>;
};

const VERSION = Date.now();

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const event = (await getEvent(slug))?.data;

  if (!event) notFound();

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: event.name,
    description: event.excerpt,
    openGraph: {
      title: event.name,
      description: event.excerpt,
      images: [
        {
          url: `${event.bannerImage}?v=${VERSION}`,
          width: 1200,
          height: 630,
          alt: event.name,
        },
        ...previousImages,
      ],
      type: "article",
      publishedTime: format(event.date, "MMMM d, yyyy"),
      authors: "Admin, Zita-Onyeka Foundation",
    },

    twitter: {
      card: "summary_large_image",
      title: event.name,
      description: event.excerpt,
      images: [`${event.bannerImage}?v=${VERSION}`],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const slug = (await params).slug;
  const event = (await getEvent(slug))?.data;

  const settingsDataPromise = getSiteSettings();

  if (!event) notFound();

  const category = capitalize(event.tags[0]);

  return (
    <main className="min-h-[calc(100vh-13rem)]">
      <Hero heading={category} bgImgUrl="/assets/img/posts-bg.jpg" />
      <InPageNav
        className="max-w-6xl mx-auto px-4 xl:px-0 justify-start"
        breadcrumbs={[
          { label: "Events", href: "/events" },
          { label: category, href: `/category/${category}` },
        ]}
      />
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 py-20 pt-10 lg:pt-20 px-4 xl:px-0">
        <div className="md:col-span-7 text-sm space-y-8 flex flex-col gap-8">
          <article className="grid gap-6 max-w-full text-black">
            <h1 className="text-3xl mb-2 font-extrabold">{event.name}</h1>

            <div className="w-full h-auto rounded overflow-hidden bg-muted relative">
              <div
                className={cn(
                  "hidden absolute inset-0 bg-black/70  items-center justify-center",
                  event.status === "completed" && "flex"
                )}
              >
                <p className="text-xl text-red-600 font-bold bg-white w-full py-6 px-3 text-center">
                  This event has expired
                </p>
              </div>
              <Image
                src={event.bannerImage}
                alt={event.name}
                className="w-full h-full object-cover object-center"
                width={1200}
                height={675}
                priority={true}
              />
            </div>

            <div className="mb-4 w-full flex flex-wrap gap-8">
              <div className="space-y-1.5">
                <div className="font-medium text-gray-500 text-sm">
                  Event Date
                </div>
                <div className="font-extrabold">
                  {format(event.date, "MMMM d, yyyy")}
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="font-medium text-gray-500 text-sm">
                  Location
                </div>
                <div className="font-extrabold">{event.location}</div>
              </div>
              <Separator />
            </div>

            <LexicalContentDisplay content={event.detail} />
          </article>

          <Suspense>
            <EventCommentForm
              settingsDataPromise={settingsDataPromise}
              eventId={event.id}
            />
          </Suspense>
        </div>

        <div className="md:col-span-3 relative">
          <div className="sticky top-10 gap-10 flex flex-col-reverse md:flex-col">
            {/* <QuickCTALinks /> */}
            <div className="rounded overflow-hidden w-full space-y-2 border">
              <h2 className="py-4 px-3 text-xl text-center font-extrabold text-white bg-orange-500">
                Reserve Slot
              </h2>
              <div className="flex gap-4 items-center p-2 border-b">
                <strong>Time:</strong>
                <small>
                  {formatTime(event.startTime)}{" "}
                  {event.endTime && ` - ${formatTime(event.endTime)}`}
                </small>
              </div>
              <div className="flex gap-4 items-center p-2 border-b">
                <strong>Max Attendees:</strong>
                <small>
                  {event.maxAttendees === 0
                    ? "Infinit (∞)"
                    : event.maxAttendees}
                </small>
              </div>
              <div className="flex gap-4 items-center p-2 border-b">
                <strong>Ticket Price:</strong>
                <small className="text-primary">
                  {event.ticketPrice ? event.ticketPrice : "Free"}
                </small>
              </div>
              <div className="p-6">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-500/70"
                  disabled={!event.registrationRequired}
                >
                  <Link href={`/events/${event.slug}/register`}> Register</Link>
                </Button>
              </div>
            </div>
            <SocialShareButtons title={event.name} />
          </div>
        </div>
      </section>
    </main>
  );
}
