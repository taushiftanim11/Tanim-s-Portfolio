"use client";

import React from "react";
import { SunIcon, MoonStarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  { icon: SunIcon, value: "light" },
  { icon: MoonStarIcon, value: "dark" },
];

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="flex h-7 w-14" />;
  }

  return (
    <motion.div
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center overflow-hidden rounded-md border dark:border-white/10 border-gray-200 dark:bg-white/5 bg-gray-100"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <button
          key={option.value}
          className={cn(
            "relative flex size-7 cursor-pointer items-center justify-center rounded-md transition-all",
            theme === option.value
              ? "dark:text-white text-gray-900"
              : "dark:text-white/35 dark:hover:text-white text-gray-400 hover:text-gray-700"
          )}
          role="radio"
          aria-checked={theme === option.value}
          aria-label={`Switch to ${option.value} theme`}
          onClick={() => setTheme(option.value)}
        >
          {theme === option.value && (
            <motion.div
              layoutId="theme-option"
              transition={{ type: "spring", bounce: 0.1, duration: 0.75 }}
              className="absolute inset-0 rounded-md dark:border-white/20 border-gray-300 border"
            />
          )}
          <option.icon className="size-3.5" />
        </button>
      ))}
    </motion.div>
  );
}
