import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import WebVitals from "../components/WebVitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic Nexus Showcase",
  description: "A showcase website blending futuristic technology with nature's wonders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        <BackgroundWrapper />
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
        <WebVitals />
      </body>
    </html>
  );
}