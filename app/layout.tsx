import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/providers/smooth-scroll";
import { cn } from "@/lib/utils";

const neueMontreal = localFont({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slot Style Counter",
  description: "Slot Style Counter - Feyi Badmus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(neueMontreal.variable, dmMono.variable, "h-full antialiased")}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
