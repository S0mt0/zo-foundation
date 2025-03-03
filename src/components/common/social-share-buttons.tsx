"use client";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = { title?: string; className?: string };
export const SocialShareButtons = ({
  className,
  title = "Welcome to the Zita-Onyeka Foundation.",
}: Props) => {
  const pathname = usePathname();
  const shareUrl = BASE_URL + pathname;

  return (
    <div className={cn("text-white grid grid-cols-1 w-max shadow", className)}>
      {/* Facebook */}
      <FacebookShareButton url={shareUrl} title={title}>
        <button className="p-2 w-full bg-blue-600 hover:bg-blue-500 transition-all duration-200">
          Share on Facebook
        </button>
      </FacebookShareButton>

      {/* Twitter (X) */}
      <TwitterShareButton url={shareUrl} title={title}>
        <button className="p-2 w-full bg-black hover:bg-black/70 transition-all duration-200">
          Share on X (Twitter)
        </button>
      </TwitterShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
        <button className="p-2 w-full bg-green-600 hover:bg-green-500 transition-all duration-200">
          Share on WhatsApp
        </button>
      </WhatsappShareButton>
    </div>
  );
};
