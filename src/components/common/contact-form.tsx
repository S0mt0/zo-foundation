"use client";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../ui/button";
import { sendMessageAction } from "@/lib/actions/message";
import { messageSchema } from "@/lib/schema/message";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      sender: "",
      email: "",
      subject: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof messageSchema>) {
    startTransition(() => {
      sendMessageAction(values)
        .then((res) => {
          if (res.error) {
            toast.error(res?.error);
          }

          if (res.success) {
            toast.success(res.success);
            form.reset();
          }
        })
        .catch((e) => {
          toast.error("Something went wrong, try again.");
        });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="sender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Name <span className="text-orange-300">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  className="placeholder:text-muted-foreground/40 shadow-none border-2"
                  placeholder="Jane Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Email <span className="text-orange-300">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  className="placeholder:text-muted-foreground/40 shadow-none border-2"
                  placeholder="email@jane.doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Subject <span className="text-orange-300">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  {...field}
                  className="shadow-none border-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Message <span className="text-orange-300">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="placeholder:text-muted-foreground/40 shadow-none border-2"
                  placeholder="Write your message here..."
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="font-semibold hover:scale-110 transition-all"
          size="lg"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};
