"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { brandList } from "@/lib/data";

export const Brands = () => {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Торгівельні марки</h2>
          <p className="mt-4 text-gray-500 text-base">
            Наша компанія має можливість запропонувати вам продукцію від
            світових лідерів у виробництві професійного виробничого та
            торгівельного обладнання.
          </p>
        </div>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-1">
          {brandList.map(({ name, imageURL }) => (
            <CarouselItem key={name} className="pl-5 md:basis-1/3 lg:basis-1/5">
              <div className="p-4 flex items-center justify-center border-2 rounded-lg dark:bg-white/5">
                <Image
                  src={imageURL}
                  width={150}
                  height={75}
                  alt="Логотип компанії"
                  className="w-full h-auto "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
