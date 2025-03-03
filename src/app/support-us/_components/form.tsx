"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const SupportForm = () => {
  return (
    <form className="space-y-4" onSubmit={() => console.log("Submitted")}>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="name">
          Name <span className="text-orange-300">*</span>
        </label>
        <input
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
          type="email"
          id="email"
          className="px-3 py-1.5 text-base rounded border border-gray-400/70"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="subject">
          Subject <span className="text-orange-300">*</span>
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
