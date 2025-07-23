"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "./theme-animations";
import clsx from "clsx";

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant;
  start?: AnimationStart;
  showLabel?: boolean;
  url?: string;
}

export function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
  url = "",
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme();

  const styleId = "theme-transition-styles";

  const updateStyles = React.useCallback((css: string, name: string) => {
    if (typeof window === "undefined") return;

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    console.log("style ELement", styleElement);
    console.log("name", name);

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;

    console.log("content updated");
  }, []);

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url);

    updateStyles(animation.css, animation.name);

    if (typeof window === "undefined") return;

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [theme, setTheme]);
  const isDarkMode = theme === "dark";
  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className={clsx(
        "fixed bottom-5 right-5 z-[999] flex h-[3rem] w-[3rem] items-center justify-center rounded-full shadow-2xl backdrop-blur-[0.5rem]",
        isDarkMode
          ? "border border-gray-700/50 bg-gray-800/80 text-stone-200 shadow-black/[0.3]" // Dark mode styles
          : "border border-gray-200/50 bg-white/80 text-gray-950 shadow-gray-200/[0.03]", // Light mode styles
      )}
      name="Theme Toggle Button"
    >
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="size-[1.2rem] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Theme Toggle </span>
      {showLabel && (
        <>
          <span className="absolute -top-10 hidden rounded-full border px-2 group-hover:block">
            {" "}
            variant = {variant}
          </span>
          <span className="absolute -bottom-10 hidden rounded-full border px-2 group-hover:block">
            {" "}
            start = {start}
          </span>
        </>
      )}
    </Button>
  );
}
