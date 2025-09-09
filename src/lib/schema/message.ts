import * as z from "zod";

export const MessageSchema = z.object({
  sender: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name is required" })
    .trim(),
  email: z
    // .string({ message: "Email is required" })
    .email({ message: "Invalid email" }),
  subject: z
    .string({ message: "Subject is required" })
    .min(5, { message: "Subject is required" })
    .trim(),
  content: z
    .string({ message: "Message is required" })
    .min(10, { message: "Message is required" })
    .trim(),
});
