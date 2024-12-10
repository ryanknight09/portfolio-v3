import { urlFor } from "@/sanity/lib/image";
import { type PortableTextComponents } from "next-sanity";
import Image from "next/image";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value).quality(80).auto("format").url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
  },
};
