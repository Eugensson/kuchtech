import Link from "next/link";
import { Julee } from "next/font/google";

const julee = Julee({ subsets: ["latin"], weight: ["400"] });

export const Logo = () => {
  return (
    <Link
      href={"/"}
      aria-label="Логотип компанії"
      className={`${julee.className} text-teal-600 font-bold sm:text-xs md:text-2xl xl:text-4xl`}
    >
      Kuch<span className="text-rose-700">Tech</span>.com
    </Link>
  );
};
