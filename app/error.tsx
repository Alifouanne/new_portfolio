"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden p-4">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          className="absolute left-20 top-20 h-32 w-32 rounded-full bg-red-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <m.div
          className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-orange-500/10 blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <m.div
        className="w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <Card className="relative border-2 border-red-200/50 bg-gradient-to-br from-background to-red-50/30 shadow-2xl backdrop-blur-sm dark:border-red-800/30 dark:to-red-950/20">
          {/* Animated Border Glow */}
          <m.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 blur-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <CardContent className="relative space-y-6 p-8 text-center">
            {/* Animated Error Icon */}
            <m.div variants={itemVariants} className="flex justify-center">
              <m.div
                className="relative"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="absolute inset-0 animate-pulse rounded-full bg-red-500/20 blur-lg" />
                <div className="relative rounded-full bg-red-100 p-4 dark:bg-red-900/30">
                  <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
                </div>
              </m.div>
            </m.div>

            {/* Error Title */}
            <m.div variants={itemVariants}>
              <h2 className="mb-2 text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#6257b4] to-[#ca4d52] bg-clip-text text-transparent dark:from-[#45C6F9] dark:to-[#8CFBA1]">
                  OOPS!!
                </span>{" "}
                Something went wrong!
              </h2>
              <m.div
                className="mx-auto h-0.5 w-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </m.div>

            {/* Error Message */}
            <m.div variants={itemVariants}>
              <Card className="border-red-200/50 bg-red-50/50 dark:border-red-800/30 dark:bg-red-950/20">
                <CardContent className="p-4">
                  <p className="break-words font-mono text-sm text-red-700 dark:text-red-300">
                    {error.message || "An unexpected error occurred"}
                  </p>
                </CardContent>
              </Card>
            </m.div>

            {/* Action Buttons */}
            <m.div
              variants={itemVariants}
              className="flex flex-col gap-3 pt-4 sm:flex-row"
            >
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  onClick={() => reset()}
                  className="w-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:from-red-600 hover:to-orange-600 hover:shadow-xl"
                >
                  <m.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="mr-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </m.div>
                  Try Again
                </Button>
              </m.div>

              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  onClick={() => router.push("/")}
                  variant="outline"
                  className="w-full rounded-full border-2 border-gray-300 px-4 py-2 font-semibold transition-all duration-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </m.div>
            </m.div>

            {/* Error ID (if available) */}
            {error.digest && (
              <m.div variants={itemVariants}>
                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  Error ID: {error.digest}
                </p>
              </m.div>
            )}

            {/* Animated Dots */}
            <m.div
              variants={itemVariants}
              className="flex justify-center space-x-1 pt-2"
            >
              {[...Array(3)].map((_, i) => (
                <m.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-red-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </m.div>
          </CardContent>
        </Card>

        {/* Floating Particles */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <m.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-red-400/40"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </m.div>
    </section>
  );
}
