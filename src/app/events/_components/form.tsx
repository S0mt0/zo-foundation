"use client";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../../../components/ui/button";
import { commentOnEventAction } from "@/lib/actions/comments";
import { EventCommentSchema } from "@/lib/schema/comments";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

export const CommentForm = ({ eventId }: { eventId: string }) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof EventCommentSchema>>({
    resolver: zodResolver(EventCommentSchema),
    defaultValues: {
      authorEmail: "",
      authorName: "",
      comment: "",
      eventId,
    },
  });

  function onSubmit(values: z.infer<typeof EventCommentSchema>) {
    startTransition(() => {
      commentOnEventAction(values)
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
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Comment <span className="text-orange-300">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="placeholder:text-muted-foreground/40 shadow-none border-2 text-lg font-medium max-h-60 scrollbar-none"
                  placeholder="Write your comment here..."
                  rows={8}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full grid grid-cols-1 xs:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="authorName"
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
            name="authorEmail"
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
        </div>

        <Button
          type="submit"
          className="font-semibold hover:scale-110 transition-all rounded-none"
          size="lg"
          disabled={isPending}
        >
          {isPending ? "Please wait..." : "POST COMMENT"}
        </Button>
      </form>
    </Form>
  );
};
