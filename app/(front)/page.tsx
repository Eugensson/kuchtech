import { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Головна",
  description:
    "Постачальник професійного обладнання для кафе, барів та ресторанів",
};

export default function HomePage() {
  return (
    <section className="flex flex-col">
      <Hero />
      <Stats />
      <Brands />
      <Contact />
    </section>
  );
}
