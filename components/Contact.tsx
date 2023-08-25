"use client";
import sendEmail from "@/actions/sendEmail";
import { useTheme } from "@/context/ThemeContextProvider";
import { useHeadreActive } from "@/lib/hooks";
import { m } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
const Contact = () => {
  const { ref } = useHeadreActive("Contact");

  const section = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  const { theme } = useTheme();
  return (
    <m.section
      ref={ref}
      id="contact"
      className="mb-20  w-[min(100%,38rem)]  scroll-mt-28 items-center sm:mb-28"
      variants={section}
      initial="hidden"
      whileInView="show"
    >
      <h2 className="mb-8 text-center text-3xl font-medium capitalize">
        Contact
      </h2>
      <p className="text-center text-gray-700 dark:text-stone-200">
        Please contact me directly at{" "}
        <Link
          href="mailto:alifouanne8@gmail.com"
          className="bg-gradient-to-r from-[#6257b4] to-[#ca4d52] bg-clip-text  text-transparent dark:from-[#45C6F9] dark:to-[#8CFBA1]"
          target="_blank"
        >
          alifouanne8@gmail.com
        </Link>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error, {
              icon: "⛔",
              style: {
                border: "1px solid #FF6D60",
                borderRadius: 8,
                padding: 4,
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
              borderRadius: 8,
              padding: 4,
              background: theme === "dark" ? "#22222C" : "rgb(243 244 246)",
              color: theme === "dark" ? "rgb(231 229 228)" : "rgb(3 7 18)",
            },
          });
        }}
      >
        <input
          name="sender"
          type="email"
          className=" h-14 rounded-lg border border-black/10 p-4  focus:border-sky-500 focus:outline-none
          focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500
          disabled:border-slate-200 disabled:bg-slate-50
          disabled:text-slate-500 dark:bg-[#22222C]"
          placeholder="Your Email"
          required
          maxLength={50}
        />
        <textarea
          name="message"
          className="my-3 h-52 rounded-lg border border-black/10 p-4   focus:border-sky-500 focus:outline-none
          focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500
          disabled:border-slate-200 disabled:bg-slate-50
          disabled:text-slate-500 dark:bg-[#22222C]"
          placeholder="Your Message"
          required
          maxLength={500}
        />
        <div className="flex items-center justify-between">
          <SubmitButton />
        </div>
      </form>
    </m.section>
  );
};

export default Contact;
