import { API_BASE_URL } from "../constants";
import { apiFetch } from "./util";

interface AllBlogsQuery {
  page?: number;
  limit?: number;
  search?: string;
  fields?: (keyof IBlog)[];
  featured?: "all" | "featured" | "not-featured";
}

/** Fetch all blogs */
export const getAllBlogs = (query?: AllBlogsQuery) =>
  apiFetch<ApiPaginatedResponse<IBlog>>("/blogs", query as any);

/** Get single blog bt slug */
export async function getBlog(
  slug: string
): Promise<ApiResponse<IBlog> | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${slug}`);

    if (!res.ok) return undefined;

    return await res.json();
  } catch (error) {
    console.log("error fetching blog: ", error);
    return undefined;
  }
}
