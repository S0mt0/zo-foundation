"use client";
import { format } from "date-fns";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn, formatTime, getStatusColor } from "@/lib/utils";
import { Badge } from "../ui/badge";

export const EventCard = ({
  slug,
  bannerImage,
  name,
  date,
  excerpt,
  location,
  showExcerpt = false,
  className,
  startTime,
  endTime,
  status,
}: IEvent & {
  showExcerpt?: boolean;
  className?: string;
}) => {
  const today = new Date();
  const eventDate = new Date(date || today);
  const dayNumber = format(eventDate, "dd");
  const monthName = format(eventDate, "MMM").toUpperCase();

  return (
    <Link
      href={`/events/${slug}`}
      aria-label={`Read event: ${name}`}
      className={cn(
        "group block w-full border border-gray-200 rounded-sm overflow-hidden bg-white hover:shadow-lg transition-all duration-200",
        className
      )}
    >
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="">
          <div className="flex-shrink-0 bg-stone-100 text-orange-500 p-6 flex flex-col items-center justify-center min-w-[120px]">
            <div className="text-4xl font-bold leading-none">{dayNumber}</div>
            <div className="text-sm font-medium mt-1">{monthName}</div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 flex flex-col justify-between gap-10">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                {name}
              </h3>

              {/* Event Details */}
              <div className="flex flex-wrap gap-4 my-3 text-xs text-gray-500/80 font-medium">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>
                    {formatTime(startTime) || "Time not set"}
                    {endTime && ` - ${formatTime(endTime)}`}
                  </span>
                </div>

                {location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </div>
                )}
              </div>

              {excerpt && showExcerpt && (
                <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed">
                  {excerpt}
                </p>
              )}
            </div>

            <div className="mt-auto">
              <span
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border uppercase",
                  getStatusColor(status)
                )}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

        {/* Promotional Image/Banner Area */}
        <div className="flex-shrink-0 w-full max-w-72 md:max-w-96 relative overflow-hidden">
          <Image
            src={bannerImage}
            alt={name}
            width={320}
            height={200}
            className="w-full h-full aspect-video object-cover group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </div>
      </div>
    </Link>
  );
};
