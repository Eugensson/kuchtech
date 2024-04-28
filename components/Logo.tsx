import Link from "next/link";
import { Julee } from "next/font/google";

const julee = Julee({ subsets: ["latin"], weight: ["400"] });

export const Logo = () => {
  return (
    <Link
      href={"/"}
      aria-label="Логотип компанії"
      className={`${julee.className} flex items-center justify-center text-teal-600 font-bold text-2xl xl:text-3xl p-1`}
    >
      Kuch<span className="text-rose-700">Tech</span>.com
    </Link>
  );
};
