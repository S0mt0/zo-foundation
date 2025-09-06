import { API_BASE_URL } from "../constants";

export async function apiFetch<T>(
  path: string,
  query?: Record<string, string | number | string[] | undefined | null>
): Promise<T | undefined> {
  try {
    const url = new URL(`${API_BASE_URL}${path}`);

    Object.entries(query ?? {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          url.searchParams.append(key, value.join(","));
        } else {
          url.searchParams.append(key, String(value));
        }
      }
    });

    const res = await fetch(url.toString());
    if (!res.ok) return undefined;

    return (await res.json()) as T;
  } catch (err) {
    console.error(`API fetch failed for ${path}:`, err);
    return undefined;
  }
}
