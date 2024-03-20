import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encodeUrlPart(url: string) {
  const prefixIndex = url.indexOf("/", url.indexOf("/") + 1) + 1; // Find second '/'
  const partToEncode = url.substring(prefixIndex);
  return url.substring(0, prefixIndex) + encodeURIComponent(partToEncode);
}
