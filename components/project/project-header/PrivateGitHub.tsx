import { Lock } from "lucide-react";

export const PrivateRepository = ({
  isPrivate,
}: {
  isPrivate: boolean | null;
}) => {
  if (isPrivate) return null;

  return (
    <div
      className={
        "flex gap-6 items-center border border-primary/50 rounded-2xl px-4 py-1.5"
      }
    >
      <Lock className="h-6 w-auto" />
      <p className="text-primary font-semibold">* Private repository</p>
    </div>
  );
};
