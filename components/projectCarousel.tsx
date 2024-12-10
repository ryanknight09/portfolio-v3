import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  images: string[];
}

export const ProjectCarousel = ({ images }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="px-12"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image} className="md:basis-1/2 3xl:basis-1/3">
            <div className={cn("overflow-hidden rounded-md border")}>
              {
                <Image
                  alt="me"
                  src={image}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="aspect-square object-scale-down rounded-md w-full h-full"
                />
              }
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 -left-2" />
      <CarouselNext className="absolute top-1/2 -right-2" />
    </Carousel>
  );
};
