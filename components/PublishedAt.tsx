import { type POST_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";

type Props = {
  publishedAt: NonNullable<POST_QUERYResult>["publishedAt"];
};

export function PublishedAt({ publishedAt }: Props) {
  return publishedAt ? (
    <p className="text-base text-slate-700">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
}
