"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { categoryList } from "@/lib/data";

const CatalogLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <section className="w-full grid grid-cols-4">
      <ul className="flex flex-col col-span-1 gap-4 max-h-[600px] overflow-y-scroll">
        {categoryList.map(({ label, subCategory }) => (
          <li key={label} className="flex flex-col gap-2">
            <strong>{label}</strong>
            {subCategory.map(({ label, src }) => {
              const isActive = pathname === src;

              return (
                <Link
                  key={label}
                  href={src}
                  className={`${
                    isActive
                      ? "hover:underline text-red-500 font-semibold"
                      : "hover:underline"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </li>
        ))}
      </ul>

      {/* <Accordion
        className="col-span-1 max-h-[500px] overflow-y-scroll"
        type="single"
        collapsible
      >
        {categoryList.map(({ label, subCategory }) => (
          <AccordionItem value={label} key={label}>
            <AccordionTrigger>{label}</AccordionTrigger>
            {subCategory.map(({ label, src }) => (
              <AccordionContent key={label}>
                <Link href={src} className="hover:underline">
                  {label}
                </Link>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion> */}

      <div className="flex items-center justify-center col-span-3 border-l-2">
        {children}
      </div>
    </section>
  );
};

export default CatalogLayout;
