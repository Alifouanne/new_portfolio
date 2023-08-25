import { m } from "framer-motion";
import Link from "next/link";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
function SubmitButton() {
  const { pending } = useFormStatus();
  const button = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
      },
    },
    hover: { scale: 1.1 },
    tap: {
      scale: 0.9,
      transition: {
        type: "tween",
      },
    },
  };
  return (
    <>
      <m.button
        type="submit"
        className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none hover:bg-gray-950 dark:bg-[#3ABF94]"
        variants={button}
        initial="hidden"
        animate="show"
        whileHover="hover"
        whileTap="tap"
        title="Submit"
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
        ) : (
          <>
            {" "}
            Submit{" "}
            {
              <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500 dark:group-hover:text-black" />
            }
          </>
        )}
      </m.button>
      <m.div
        variants={button}
        initial="hidden"
        animate="show"
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          href="https://wa.me/+963988565728"
          target="_blank"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none hover:bg-gray-950 dark:dark:bg-[#22222C]"
          title="whatsapp"
        >
          Whatsapp{" "}
          {
            <FaWhatsapp className="text-xs opacity-70 transition-transform group-hover:scale-150 group-hover:text-[#3ABF94]" />
          }
        </Link>
      </m.div>
    </>
  );
}

export default SubmitButton;
