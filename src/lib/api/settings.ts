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

/** Fetch website settings */
export async function getSiteInfo(): Promise<
  ApiResponse<IFoundationInfo> | undefined
> {
  try {
    const res = await fetch(`${API_BASE_URL}/info`);

    if (!res.ok) return undefined;

    return await res.json();
  } catch (error) {
    console.log("error fetching info: ", error);
    return undefined;
  }
}
