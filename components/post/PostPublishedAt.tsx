import dayjs from "dayjs";
import { Clock } from "lucide-react";

interface Props {
  publishedAt: string | null;
}

export const PostPublishedAt = ({ publishedAt }: Props) => {
  if (!publishedAt) return null;

  return (
    <div className="flex items-center gap-2">
      <Clock className="text-primary w-4 h-4" />
      <p className="text-sm text-muted-foreground">
        {dayjs(publishedAt).format("D MMMM YYYY")}
      </p>
    </div>
  );
};
