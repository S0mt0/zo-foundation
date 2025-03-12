import { API_BASE_URL } from "../constants";

export async function getEvent(eventId: string): Promise<TEvent> {
  const res = await fetch(`${API_BASE_URL}/events/${eventId}`);

  if (!res.ok) throw new Error("Failed to fetch event.");

  return res.json();
}
