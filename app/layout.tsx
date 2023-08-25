import LazyMotions from "@/components/LazyMotions";
import ThemeChanger from "@/components/ThemeChanger";
import HeaderIndecatorProvider from "@/context/HeaderIndecatorProvider";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import WebVitals from "@/lib/web-vitals";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import React from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/Header"));
const inter = localFont({
  src: "./inter.ttf",
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Ali | Personal Portfolio",
  description: "Ali is a front end developer with 2 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable}`}>
      <body
        className={` relative bg-gray-50  pt-36 font-sans   text-gray-950 dark:bg-[#191A1F] dark:text-stone-200 sm:pt-36`}
      >
        <LazyMotions>
          <ThemeContextProvider>
            <HeaderIndecatorProvider>
              <Header />
              <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#22000c] sm:w-[68.75rem]" />
              <div className="xl:lef[-15rem]2xlg:left-[-5rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem]   dark:bg-[#001429] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]" />
              <WebVitals />
              {children}
              <Analytics />
              <Toaster position="top-right" />
              <Footer />
              <ThemeChanger />
            </HeaderIndecatorProvider>
          </ThemeContextProvider>
        </LazyMotions>
      </body>
    </html>
  );
}
