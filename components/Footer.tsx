import { links } from "@/lib/data";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const tags = links.slice(0, 5);

  return (
    <footer className="m-4 rounded-lg shadow ">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image src={Logo} className="mb-2 mr-3 h-8 w-8 sm:mb-0" alt="Logo" />

          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500  sm:mb-0">
            {tags.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.hash}
                  className="mr-4 transition-colors hover:text-gray-950 dark:text-stone-200 dark:hover:text-[#3ABF94] md:mr-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block bg-gradient-to-r from-[#6257b4] to-[#ca4d52] bg-clip-text text-sm text-transparent dark:from-[#45C6F9] dark:to-[#8CFBA1] sm:text-center">
          © 2023 Eng Ali Fouanne . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
