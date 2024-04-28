import { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "KuchTech | Головна",
  description:
    "Постачальник професійного обладнання для кафе, барів та ресторанів",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Brands />
      <Contact />
    </>
  );
};

export default HomePage;
