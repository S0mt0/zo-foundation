import { API_BASE_URL } from "../constants";

export async function getAllEvents(): Promise<TEventSnippet[]> {
  const res = await fetch(`${API_BASE_URL}/events`);

  if (!res.ok) throw new Error("Failed to fetch events, try again.");

  return res.json();
}
