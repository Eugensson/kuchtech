import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categoryList } from "@/lib/data";

const CatalogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full grid grid-cols-4 gap-5">
      <Accordion className="col-span-1" type="single" collapsible>
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
      </Accordion>

      <div className="flex items-center justify-center col-span-3 border-l-2">
        {children}
      </div>
    </section>
  );
};

export default CatalogLayout;
