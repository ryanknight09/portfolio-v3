import { ScrollText } from "lucide-react";
import { DottedLine } from "../DottedLine";
import { Separator } from "../ui/separator";

const education = [
  {
    school: "Eastern Washington University",
    startDate: "2015",
    endDate: "2019",
    degree: "Bachelor of Computer Science",
  },
  {
    school: "Spokane Falls Community College",
    startDate: "2009",
    endDate: "2011",
    degree: "AAS Audio Recording Engineering",
  },
];

export const Education = () => {
  return (
    <section className="md:pt-12 flex gap-12 flex-col overflow-x-hidden">
      <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
        Experience
      </h1>
      <div>
        {education.map(({ school, degree, startDate, endDate }, index) => (
          <div key={school} className="flex flex-col">
            <div className="flex gap-2 items-start">
              <ScrollText className="text-muted-foreground h-4 w-auto mt-1.5" />
              <div className="flex flex-col gap-1">
                <p className="text-lg">{degree}</p>
                <p className="text-muted-foreground">
                  {school},{" "}
                  <span>
                    {startDate} - {endDate}
                  </span>
                </p>
              </div>
            </div>
            {index !== education.length - 1 && (
              <Separator orientation="vertical" className="h-8 mb-2" />
            )}
          </div>
        ))}
      </div>
      <DottedLine className="max-w-3xl" />
    </section>
  );
};
