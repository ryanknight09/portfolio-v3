import { type POST_QUERYResult } from "@/sanity/types";

type Props = {
  categories: NonNullable<POST_QUERYResult>["categories"];
};

export function Categories({ categories }: Props) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700"
    >
      {category.title}
    </span>
  ));
}
