import { ArrowRight } from "lucide-react";
import Link from "next/link";

const arrows = Array.from({ length: 50 }, (_, index) => index + 1);

export const Connect = () => (
  <Link
    href={"contact"}
    className="z-0 w-full flex items-center justify-center clamp-font relative group cursor-pointer mt-6"
  >
    <p className="group-hover:opacity-20 transition-opacity duration-300">
      Let&apos;s Connect!
    </p>
    <div className="overflow-hidden hidden group-hover:flex w-full masked-gradient z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <ul className="flex gap-8 lg:gap-16 group-hover:animate-infinite-scroll-arrow-slow">
        {arrows.map((arrow, index) => (
          <li key={`${arrow}-${index}`}>
            <ArrowRight className="text-primary h-5 md:h-10 xl:h-15 2xl:h-20 w-auto" />
          </li>
        ))}
      </ul>
    </div>
  </Link>
);
