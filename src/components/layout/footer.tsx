import { getSiteInfo } from "@/lib/api";
import { MapPin } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";

export const Footer = async () => {
  const info = (await getSiteInfo())?.data;

  return (
    <footer className="bg-slate-800 text-stone-400 text-xs">
      <div className="flex flex-wrap justify-center items-center text-center gap-y-3 gap-x-12 p-6">
        <address className="max-w-xs flex gap-2">
          <MapPin className="h-4 w-4 text-stone-200 shrink-0" />
          <span className="text-center capitalize">{info?.address}</span>
        </address>
        <div className="shrink-0 whitespace-nowrap flex items-center gap-4">
          <ImPhoneHangUp className="h-3 w-3 text-stone-200" />
          <a href={`tel:${info?.phone}`}>{info?.phone}</a>
        </div>
        <div className="shrink-0 whitespace-nowrap flex items-center gap-4">
          <FaPaperPlane className="h-3 w-3 text-stone-200" />
          <a href={`mailto:${info?.email}`}>{info?.email}</a>
        </div>
      </div>
      <div className="bg-[#121525] p-6 text-center">
        &copy; 2025. All rights reserved. Website by{" "}
        <a href="mailto:sewkito@gmail.com" className="underline">
          Sewkito.
        </a>
      </div>
    </footer>
  );
};
