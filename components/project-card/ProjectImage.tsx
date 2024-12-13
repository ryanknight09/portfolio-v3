import { urlFor } from "@/sanity/lib/image";
import { type MainImage } from "@/types/MainImage";
import Image from "next/image";

interface Props {
  image: MainImage;
}

export const ProjectImage = ({ image }: Props) => {
  if (!image) return null;

  return (
    <figure className="overflow-hidden rounded-md bg-transparent py-4">
      <Image
        alt={image.alt || ""}
        src={urlFor(image).url()}
        width={0}
        height={0}
        sizes="100%"
        className="shadow-xl object-cover rounded-md w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
    </figure>
  );
};
