"use client";

import LazyMotions from "@/components/LazyMotions";
import HeaderIndecatorProvider from "@/context/HeaderIndecatorProvider";
// import ThemeContextProvider from "@/context/ThemeContextProvider";
import WebVitals from "@/lib/web-vitals";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import type React from "react";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useIsMobile } from "@/lib/useIsMobile";
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/Header"));

const inter = localFont({
  src: "./inter.ttf",
  display: "swap",
  variable: "--font-inter",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`relative overflow-x-hidden pt-36 font-sans text-gray-950 transition-all duration-700 ease-in-out dark:text-stone-200 sm:pt-36`}
      >
        {isMobile ? "" : <AuroraBackground />}

        <LazyMotions>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <HeaderIndecatorProvider>
              <Suspense fallback={null}>
                <Header />
                <WebVitals />
                {children}
                <Analytics />
                <Toaster position="top-right" />
                <Footer />
                <ThemeToggleButton variant="circle" start="bottom-right" />
              </Suspense>
            </HeaderIndecatorProvider>
          </ThemeProvider>
        </LazyMotions>
      </body>
    </html>
  );
}
