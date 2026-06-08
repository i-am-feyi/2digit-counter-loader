import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateProgressStops = (stopCount = 4, variance = 7, finalValue = 100) => {
  const stops = [];

  for (let i = 1; i < stopCount; i++) {
    const base = Math.round((finalValue / stopCount) * i);

    const value = base + Math.round((Math.random() - 0.5) * variance * 2);

    stops.push({
      stop: i,
      value,
      tens: Math.floor(value / 10),
      ones: value % 10,
    });
  }

  stops.push({
    stop: stopCount,
    value: finalValue,
    tens: Math.floor(finalValue / 10),
    ones: finalValue % 10,
  });

  return stops;
};
