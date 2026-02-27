import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PADEL PRO CLUB",
  description: "PADEL PRO CLUB — Современный падел-клуб во Владивостоке",
  alternates: {
    canonical: "https://padelvl.ru/",
    languages: {
      ru: "https://padelvl.ru/",
    },
  },
  keywords: [
    "падел владивосток",
    "padel владивосток",
    "аренда корта падел",
    "падел клуб",
    "тренировки падел",
    "большой теннис владивосток",
    "корпоративный спорт",
    "турниры падел",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "body",
        )}
      >
        <div id="portal-root"></div>
        {children}
      </body>
    </html>
  );
}
