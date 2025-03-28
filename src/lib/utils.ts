import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Convert cents to formatted currency string (e.g., 4999 -> "$49.99")
export function formatPrice(cents: number | undefined): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format((cents || 0) / 100);
  }

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  