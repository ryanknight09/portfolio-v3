import { type Slug } from "@/sanity/types";
import { Badge } from "../ui/badge";

type SimpleCategory = {
  _id: string;
  slug: Slug | null;
  title: string | null;
};

export const PostCategories = ({
  categories,
}: {
  categories: SimpleCategory[];
}) => {
  return (
    <div className="flex items-center flex-wrap gap-2">
      {categories.map((category) => (
        <Badge
          variant="outline"
          className="border-primary rounded-md px-2 max-w-max"
          key={category._id}
        >
          {category.title}
        </Badge>
      ))}
    </div>
  );
};
