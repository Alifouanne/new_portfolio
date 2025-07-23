"use client";

import sendEmail from "@/actions/sendEmail";
import { useHeadreActive } from "@/lib/hooks";
import { m } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import { Input } from "@/components/ui/input"; // Import Input component
import { Textarea } from "@/components/ui/textarea"; // Import Textarea component
import { AnimatedGradientText } from "./magicui/animated-text";
import { useTheme } from "next-themes";

const Contact = () => {
  const { ref } = useHeadreActive("Contact");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1, // Stagger children for a smoother reveal
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <m.section
      ref={ref}
      id="contact"
      className="relative mb-20 flex w-[min(100%,38rem)] scroll-mt-28 flex-col items-center  px-4 text-center sm:mb-28" // Added flex-col, items-center, text-center
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Animate once when 30% in view
    >
      {/* Subtle Animated Background Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <m.div
          className="absolute -left-10 -top-10 h-24 w-24 rounded-full mix-blend-multiply blur-[10rem]"
          style={{
            background: isDarkMode
              ? "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))" // Blue-cyan for contact
              : "linear-gradient(to right, rgba(59, 130, 246, 0.03), rgba(6, 182, 212, 0.03))", // Very subtle for light mode
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <m.div
          className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full mix-blend-multiply blur-[10rem]"
          style={{
            background: isDarkMode
              ? "linear-gradient(to right, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))" // Purple-pink for contact
              : "linear-gradient(to right, rgba(147, 51, 234, 0.03), rgba(236, 72, 153, 0.03))", // Very subtle for light mode
          }}
          animate={{
            x: [0, -10, 0],
            y: [0, 10, 0],
            scale: [1, 0.98, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="text mb-8 text-center text-3xl font-medium capitalize">
        <AnimatedGradientText speed={1.5} colorFrom="#3eb489" colorTo="#90EE90">
          Experience & Qualification
        </AnimatedGradientText>
      </div>

      <p className="relative z-10 mb-8 text-center text-gray-700 dark:text-stone-200">
        Please contact me directly at{" "}
        <Link
          href="mailto:alifouanne8@gmail.com"
          className={`inline-block bg-gradient-to-r from-[#3eb489] to-[#90EE90] bg-clip-text font-semibold text-transparent transition-transform hover:scale-105`}
          target="_blank"
          rel="noopener noreferrer"
        >
          alifouanne8@gmail.com
        </Link>{" "}
        or through this form
      </p>

      <form
        className="relative z-10 mt-4 flex w-full flex-col gap-3" // Added w-full
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error, {
              icon: "⛔",
              style: {
                border: "1px solid #FF6D60",
                borderRadius: "8px",
                padding: "4px",
                background: theme === "dark" ? "#22222C" : "rgb(243 244 246)",
                color: theme === "dark" ? "rgb(231 229 228)" : "rgb(3 7 18)",
              },
            });
            return;
          }
          toast.success("Email has been sent successfully", {
            icon: "👏",
            duration: 4000,
            style: {
              border: "1px solid #03C988",
              borderRadius: "8px",
              padding: "4px",
              background: theme === "dark" ? "#22222C" : "rgb(243 244 246)",
              color: theme === "dark" ? "rgb(231 229 228)" : "rgb(3 7 18)",
            },
          });
        }}
      >
        <m.div variants={formItemVariants}>
          <Input
            name="sender"
            type="email"
            className="h-14 rounded-lg border border-black/10 p-4 focus-visible:border-sky-500 focus-visible:ring-1 focus-visible:ring-sky-500 focus-visible:ring-offset-0 focus-visible:invalid:border-red-500 focus-visible:invalid:ring-red-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 dark:border-gray-700 dark:bg-[#22222C] dark:text-white"
            placeholder="Your Email"
            required
            maxLength={50}
          />
        </m.div>
        <m.div variants={formItemVariants}>
          <Textarea
            name="message"
            className="my-3 h-52 rounded-lg border border-black/10 p-4 focus-visible:border-sky-500 focus-visible:ring-1 focus-visible:ring-sky-500 focus-visible:ring-offset-0 focus-visible:invalid:border-red-500 focus-visible:invalid:ring-red-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 dark:border-gray-700 dark:bg-[#22222C] dark:text-white"
            placeholder="Your Message"
            required
            maxLength={500}
          />
        </m.div>
        <div className="flex items-center justify-between ">
          <SubmitButton />
        </div>
      </form>
    </m.section>
  );
};

export default Contact;
