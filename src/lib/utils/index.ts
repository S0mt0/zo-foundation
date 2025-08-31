import { clsx, type ClassValue } from "clsx";
import { format, parse } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string = "Admin") {
  const initials = name
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase())
    .join("");
  return initials;
}

export function capitalize(name: string = "") {
  const capitalized = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return capitalized;
}

export function formatTime(time: string, zone: string = "WAT") {
  const parsed = parse(time, "HH:mm", new Date());
  const formatted = format(parsed, "hh:mm a");

  return `${formatted} ${zone}`;
}
