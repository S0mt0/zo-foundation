"use server";
import * as z from "zod";

import { messageSchema } from "../schema/message";
import { API_BASE_URL } from "../constants";

export const sendMessageAction = async (
  data: z.infer<typeof messageSchema>
) => {
  const validatedFields = messageSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/message`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    if (!response.ok) {
      return {
        error: json?.message || "Failed send message",
      };
    }

    return { success: json?.message || "Message sent!" };
  } catch (e) {
    console.error(e);
    return {
      error: "Network error, try again.",
    };
  }
};
