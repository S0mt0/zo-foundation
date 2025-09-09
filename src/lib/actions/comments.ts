"use server";
import * as z from "zod";

import { BlogCommentSchema, EventCommentSchema } from "../schema/comments";
import { API_BASE_URL } from "../constants";
import { revalidateTag } from "next/cache";

export const commentOnBlogAction = async (
  data: z.infer<typeof BlogCommentSchema>
) => {
  const validatedFields = BlogCommentSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  const payload = validatedFields.data;
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/comment`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    if (!response.ok) {
      return {
        error: json?.blogComment || "Network error, try again.",
      };
    }

    revalidateTag(payload.blogId);
    return { success: json?.blogComment || "Reply sent" };
  } catch (e) {
    console.error(e);
    return {
      error: "Network error, try again.",
    };
  }
};

export const commentOnEventAction = async (
  data: z.infer<typeof EventCommentSchema>
) => {
  const validatedFields = EventCommentSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const payload = validatedFields.data;
  try {
    const response = await fetch(`${API_BASE_URL}/events/comment`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    if (!response.ok) {
      return {
        error: json?.blogComment || "Network error, try again.",
      };
    }

    revalidateTag(payload.eventId);
    return { success: json?.blogComment || "Reply sent" };
  } catch (e) {
    console.error(e);
    return {
      error: "Network error, try again.",
    };
  }
};
