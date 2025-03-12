"use server";
import { API_BASE_URL } from "../constants";

export async function sendMessage(data: MessagePayload): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/messages`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Failed to fetch event.");

  return res.json();
}
