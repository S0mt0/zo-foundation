/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_BASE_URL } from "../constants";

export async function getAllBlogs(
  query?: Record<string, any>
): Promise<IBlogsData | undefined> {
  const url = new URL(`${API_BASE_URL}/blogs`);

  query = { ...query, fields: "-content" };

  Object.keys(query).forEach((key) => {
    if (query[key] !== undefined && query[key] !== null) {
      url.searchParams.append(key, query[key]);
    }
  });

  const res = await fetch(url.toString());

  if (!res.ok) return undefined;

  return res.json().then((data) => data?.data);
}
