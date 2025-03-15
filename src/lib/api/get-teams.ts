import { API_BASE_URL } from "../constants";

export async function getTeamMembers(): Promise<ITeam[] | undefined> {
  const res = await fetch(`${API_BASE_URL}/team`);

  if (!res.ok) return undefined;

  return res.json().then((data) => data?.data);
}
