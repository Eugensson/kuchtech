import Link from "next/link";
import { Julee } from "next/font/google";

const julee = Julee({ subsets: ["latin"], weight: ["400"] });

export const Logo = () => {
  return (
    <Link
      href={"/"}
      aria-label="Логотип компанії"
      className={`${julee.className} flex items-center justify-center md:justify-start text-teal-600 font-bold text-2xl xl:text-3xl`}
    >
      Kuch<span className="text-rose-800 dark:text-rose-400">Tech</span>.com
    </Link>
  );
};
