import { API_BASE_URL } from "../constants";

export async function getTeamMembers(): Promise<ITeamMember[] | undefined> {
  const res = await fetch(`${API_BASE_URL}/teams`, {
    next: { revalidate: 3600 },
    cache: "force-cache",
  });

  if (!res.ok) return undefined;

  return res.json().then((data) => data?.data);
}
