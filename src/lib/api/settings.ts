import { API_BASE_URL } from "../constants";

/** Fetch website settings */
export async function getSiteSettings(): Promise<
  ApiResponse<IWebsiteSettings> | undefined
> {
  try {
    const res = await fetch(`${API_BASE_URL}/settings`);

    if (!res.ok) return undefined;

    return await res.json();
  } catch (error) {
    console.log("error fetching settings: ", error);
    return undefined;
  }
}
