import type { Metadata } from "next";
import {
  Noto_Serif_Malayalam,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const malayalam = Noto_Serif_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vadakkumpuram Vishnumaya Kuttichathan Temple",
  description:
    "Official devotional portal for Vadakkumpuram Vishnumaya Kuttichathan Temple – experience divine protection, book poojas, and immerse yourself in sacred guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${malayalam.variable} relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
