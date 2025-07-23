"use client";

import { m } from "framer-motion";
import { Loader2 } from "lucide-react"; // Using Lucide React for the spinner icon

const Loading = () => {
  // FIX: Moved transition inside the 'animate' property for shimmer
  const shimmer = {
    animate: {
      backgroundPosition: ["-200% 0", "200% 0"],
      transition: {
        // This is now correctly nested
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center p-4">
      <m.div
        className="relative w-full max-w-md rounded-lg border border-gray-200/50 bg-white/50 p-8 shadow-lg backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        role="status"
      >
        {/* Shimmer Overlay */}
        <m.div
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, transparent 40%)",
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
        />

        <div className="relative z-10 flex flex-col items-center space-y-6">
          {/* Animated Spinner */}
          <m.div variants={spinnerVariants} animate="animate">
            <Loader2 className="h-12 w-12 text-gray-500 dark:text-gray-400" />
          </m.div>

          {/* Loading Text */}
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Loading Content...
          </h2>

          {/* Skeleton Lines */}
          <div className="w-full space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-5/6 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>

          <span className="sr-only">Loading...</span>
        </div>
      </m.div>
    </div>
  );
};

export default Loading;
