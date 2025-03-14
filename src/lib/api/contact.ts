"use server";
import { API_BASE_URL } from "../constants";

export async function sendMessage(
  data: MessagePayload
): Promise<string | undefined> {
  const res = await fetch(`${API_BASE_URL}/messages`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) return undefined;

  return res.json().then((data) => data?.response);
}
