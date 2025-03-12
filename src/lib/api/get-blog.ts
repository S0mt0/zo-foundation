import { API_BASE_URL } from "../constants";

export async function getBlog(blogId: string): Promise<TBlog> {
  const res = await fetch(`${API_BASE_URL}/blogs/${blogId}`);

  if (!res.ok) throw new Error("An error occurred while getting that blog.");

  return res.json();
}
