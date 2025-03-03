/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Form = ({
  onSubmit = (e) => {
    e?.preventdefault();
  },
}: {
  onSubmit?: (e?: any) => Promise<void> | void;
}) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="name">
          Name <span className="text-orange-300">*</span>
        </label>
        <input
          required
          type="text"
          id="name"
          className="px-3 py-1.5 text-base rounded border border-gray-400/70"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="email">
          Email <span className="text-orange-300">*</span>
        </label>
        <input
          required
          type="email"
          id="email"
          className="px-3 py-1.5 text-base rounded border border-gray-400/70"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="phone">
          Phone <span className="text-orange-300">*</span>
        </label>
        <input
          required
          type="text"
          id="phone"
          className="px-3 py-1.5 text-base rounded border border-gray-400/70"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          type="subject"
          id="subject"
          className="px-3 py-1.5 text-base rounded border border-gray-400/70"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="message">
          Message <span className="text-orange-300">*</span>
        </label>
        <textarea
          required
          id="message"
          className="px-3 py-1.5 text-base rounded border border-gray-400/70 h-32"
        />
      </div>

      <div>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="text-white font-semibold bg-green-600 hover:bg-blue-800 transition-colors p-4 flex gap-2 items-center"
        >
          Submit <Send className="h-5 w-5" />
        </motion.button>
      </div>
    </form>
  );
};
