import { urlFor } from "@/sanity/lib/image";
import { type EXPERIENCE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { DottedLine } from "../DottedLine";

interface Props {
  experiences: EXPERIENCE_QUERYResult;
}

export const PlacesWorked = ({ experiences }: Props) => {
  return (
    <section className="flex gap-12 flex-col">
      <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
        Places I&apos;ve Worked
      </h1>
      <div className="overflow-hidden flex">
        <ul className="flex gap-10 animate-infinite-scroll hover:paused">
          {[...experiences, ...experiences].map(
            ({ mainImage, _id, title, description, jobTitle }, index) => (
              <li
                key={`${_id}-${index}`}
                className="bg-secondary w-[430px] min-w-[430px] rounded-md p-12"
              >
                <div className="flex items-center gap-4">
                  {mainImage ? (
                    <Image
                      src={urlFor(mainImage).width(64).height(64).url()}
                      width={64}
                      height={64}
                      alt={mainImage.alt || title || ""}
                      className="rounded-sm"
                    />
                  ) : null}
                  <div>
                    <p className="text-lg">{title}</p>
                    <p className="text-sm text-muted-foreground">{jobTitle}</p>
                  </div>
                </div>
                <p className="text-md text-muted-foreground pt-12">
                  {description}
                </p>
              </li>
            )
          )}
        </ul>
      </div>
      <DottedLine />
    </section>
  );
};
