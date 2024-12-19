import { Lock } from "lucide-react";

export const PrivateRepository = ({
  isPrivate,
}: {
  isPrivate: boolean | null;
}) => {
  if (!isPrivate) return null;

  return (
    <div className="flex items-center gap-2 bg-secondary rounded-md px-2 py-1 text-xs font-semibold">
      <span>Private repository</span>
      <Lock className="h-3.5 w-auto" />
    </div>
  );
};
