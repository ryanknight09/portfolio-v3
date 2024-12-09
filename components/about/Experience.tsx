import { type EXPERIENCE_QUERYResult } from "@/sanity/types";
import { simpleDate } from "@/utils/simpleDate";
import { Computer } from "lucide-react";
import { DottedLine } from "../DottedLine";
import { Separator } from "../ui/separator";

interface Props {
  experiences: EXPERIENCE_QUERYResult;
}

export const Experience = ({ experiences }: Props) => {
  const currentIndex = experiences.findIndex((el) => el.isCurrent);
  const currentElement = experiences.splice(currentIndex, 1)[0];

  experiences.unshift(currentElement);

  return (
    <section className="md:pt-12 flex gap-12 flex-col overflow-x-hidden">
      <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
        Experience
      </h1>
      <div>
        {experiences.map(
          ({ _id, title, jobTitle, startDate, endDate }, index) => (
            <div key={_id} className="flex flex-col">
              <div className="flex gap-2 items-start">
                <Computer className="text-muted-foreground h-4 w-auto mt-1.5" />
                <div className="flex flex-col gap-1">
                  <p className="text-lg">{jobTitle}</p>
                  <p className="text-muted-foreground">
                    {title},{" "}
                    <span>
                      {simpleDate(startDate)} -{" "}
                      {endDate ? simpleDate(endDate) : "Present"}
                    </span>
                  </p>
                </div>
              </div>
              {index !== experiences.length - 1 && (
                <Separator orientation="vertical" className="h-8 mb-2" />
              )}
            </div>
          )
        )}
      </div>
      <DottedLine className="max-w-3xl" />
    </section>
  );
};
