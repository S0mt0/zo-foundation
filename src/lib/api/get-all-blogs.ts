import { API_BASE_URL } from "../constants";

export async function getAllBlogs(): Promise<TBlogSnippet[]> {
  const res = await fetch(`${API_BASE_URL}/blogs`);

  if (!res.ok) throw new Error("Failed to fetch blogs, try again.");

  return res.json();
}
