import { cn } from "@/lib/utils";

interface Props {
  date: Date;
  isSelected: boolean;
  isInCurrentMonth: boolean;
  onClick: (date: Date) => void;
}

export const Day = ({ date, isSelected, isInCurrentMonth, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(date)}
      className={cn(
        !isInCurrentMonth && "text-muted-foreground",
        "flex items-center justify-center aspect-square text-sm hover:cursor-pointer hover:bg-secondary rounded-xs",
        isSelected && "bg-primary hover:bg-primary/90 text-foreground"
      )}
    >
      {date.getDate()}
    </div>
  );
};
