import { API_BASE_URL } from "../constants";

export async function getAllEvents(
  query: Record<string, any> = { fields: "-more_details" }
): Promise<any | undefined> {
  const url = new URL(`${API_BASE_URL}/events`);

  Object.keys(query).forEach((key) => {
    if (query[key] !== undefined && query[key] !== null) {
      url.searchParams.append(key, query[key]);
    }
  });

  const res = await fetch(url.toString());

  if (!res.ok) return undefined;

  return res.json().then((data) => data?.data);
}
