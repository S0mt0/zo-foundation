import { Metadata } from "next";

import { Hero } from "@/components/common/hero";
import { InPageNav } from "@/components/common/in-page-nav";
import { Pagination } from "@/components/common/pagination";
import { QuickCTALinks } from "@/components/common/quick-cta-links";
import { SearchInput } from "@/components/common/search-input";
import { SocialShareButtons } from "@/components/common/social-share-buttons";
import { getAllEvents } from "@/lib/api";
import { EventsTabs } from "./_components/tabs";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join us at events hosted by the Zita-Onyeka Foundation. From fundraisers to community programs, discover how you can get involved and make an impact.",
};

export default async function EventsPage(props: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    status?: string;
    limit?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 5;
  const search = searchParams.search || undefined;
  const status = (searchParams.status || "completed") as PublicEventStatus;

  const response = await getAllEvents({
    fields: [
      "name",
      "excerpt",
      "slug",
      "status",
      "date",
      "startTime",
      "endTime",
      "location",
      "bannerImage",
    ],
    featured: "all",
    status: [status],
    limit,
    page,
    search,
  });

  return (
    <main className="min-h-[calc(100vh-13rem)]">
      <Hero heading="Events" bgImgUrl="/assets/img/posts-bg.jpg" />
      <InPageNav
        className="max-w-6xl mx-auto px-4 xl:px-0 justify-start"
        breadcrumbs={[{ label: "Events" }]}
      />

      <div className="block lg:hidden mt-10 max-w-md ml-auto px-4">
        <SearchInput
          pathName="events"
          search={search}
          placeholder="Search for events here..."
        />
      </div>

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-16 py-20 pt-10 lg:pt-20 px-4 xl:px-0">
        {/* Main content */}
        <div className="md:col-span-7 text-sm space-y-8">
          <div className="grid gap-10">
            {response && <EventsTabs events={response.data} status={status} />}
          </div>

          {response && (
            <Pagination
              pathname="/events"
              searchParams={searchParams}
              currentPage={response.pagination.page}
              totalPages={response.pagination.totalPages}
              showingStart={
                (response.pagination.page - 1) * response.pagination.limit + 1
              }
              showingEnd={Math.min(
                response.pagination.page * response.pagination.limit,
                response.pagination.total
              )}
              totalItems={response.pagination.total}
              itemName="event"
              limit={response.pagination.limit}
            />
          )}
        </div>
        <div className="md:col-span-3 relative">
          <div className="sticky top-10 gap-10 flex flex-col-reverse md:flex-col">
            <SearchInput
              pathName="events"
              search={search}
              placeholder="Search for events here..."
              className="hidden lg:block"
            />
            <QuickCTALinks />
            <SocialShareButtons title="Join us at events hosted by the Zita-Onyeka Foundation. From fundraisers to community programs, discover how you can get involved and make an impact." />
          </div>
        </div>
      </section>
    </main>
  );
}
