import { urlFor } from "@/sanity/lib/image";
import { type MainImage } from "@/types/MainImage";
import Image from "next/image";

interface Props {
  image: MainImage;
  title: string | null;
}

export const PostImage = ({ image, title }: Props) => {
  if (!image) return null;

  return (
    <figure className="flex flex-col gap-2 items-start">
      <Image
        src={urlFor(image).url()}
        width={0}
        height={0}
        sizes="100%"
        alt={image.alt || title || ""}
        className="rounded-sm w-full"
      />
    </figure>
  );
};
