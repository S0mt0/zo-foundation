import { API_BASE_URL } from "../constants";

export async function getEvent(eventId: string): Promise<IEvent | undefined> {
  const res = await fetch(`${API_BASE_URL}/events/${eventId}`);

  if (!res.ok) return undefined;

  return res.json().then((data) => data?.data);
}
