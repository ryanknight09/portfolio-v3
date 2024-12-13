"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FadeUpDiv } from "../Animation";

interface Props {
  images: string[];
}

export const ProjectCarousel = ({ images }: Props) => {
  return (
    <FadeUpDiv className="md:pt-12 flex gap-12 flex-col">
      <Carousel
        opts={{
          align: "start",
        }}
        className="px-12"
      >
        <CarouselContent className="-ml-12">
          {images.map((image) => (
            <CarouselItem
              key={image}
              className="md:basis-1/2 3xl:basis-1/3 pl-12"
            >
              <div className="overflow-hidden rounded-md group">
                {
                  <Image
                    alt="me"
                    src={image}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="aspect-square object-scale-down rounded-md w-full h-full transition-transform duration-300 group-hover:scale-105  filter brightness-95"
                  />
                }
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -left-2" />
        <CarouselNext className="absolute top-1/2 -right-2" />
      </Carousel>
    </FadeUpDiv>
  );
};
