import { ArrowRight } from "lucide-react";

const arrows = Array.from({ length: 6 }, (_, index) => index + 1);

export const AnimatedArrows = () => (
  <div className="overflow-hidden max-w-[120px] hidden group-hover:flex masked-gradient">
    <ul className="flex gap-8 group-hover:animate-infinite-scroll-arrow">
      {arrows.map((arrow, index) => (
        <li key={`${arrow}-${index}`}>
          <ArrowRight className="text-primary" />
        </li>
      ))}
    </ul>
  </div>
);
