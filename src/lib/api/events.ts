import { API_BASE_URL } from "../constants";
import { apiFetch } from "./util";

interface AllEventsQuery {
  page?: number;
  limit?: number;
  status?: PublicEventStatus[];
  search?: string;
  fields?: (keyof IEvent)[];
  featured?: "all" | "featured" | "not-featured";
}

/** Fetch all events */
export const getAllEvents = ({
  status = ["completed", "happening", "upcoming"],
  ...query
}: AllEventsQuery = {}) =>
  apiFetch<ApiPaginatedResponse<IEvent>>("/events", {
    status: status?.join(","),
    ...query,
  } as any);

/** Get single event by slug */
export async function getEvent(
  slug: string
): Promise<ApiResponse<IEvent> | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/events/${slug}`, {
      next: { tags: [slug] },
    });

    if (!res.ok) return undefined;

    return await res.json();
  } catch (error) {
    console.log("error fetching event: ", error);
    return undefined;
  }
}
