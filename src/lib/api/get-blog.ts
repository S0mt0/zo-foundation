import { API_BASE_URL } from "../constants";

export async function getBlog(blogId: string): Promise<IBlog | undefined> {
  const res = await fetch(`${API_BASE_URL}/blogs/${blogId}`);

  if (!res.ok) return undefined;

  return res.json().then((data) => data?.data);
}
