import Brands from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";

const Home = () => {
  return (
    <section className="flex flex-col w-[1440px]">
      <Hero />
      <Stats />
      <Brands />
      <Contact />
    </section>
  );
};

export default Home;
