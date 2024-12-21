import { cn } from "@/lib/utils";
import { generateCalendarDates } from "@/utils/generateDates";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DatePicker = () => {
  const year = 2024;
  const month = 10;
  const dates = generateCalendarDates(year, month);

  return (
    <div className="grid grid-cols-7 border rounded-md p-3 gap-1 w-full h-full aspect-square">
      {days.map((day) => (
        <div
          className="text-xs text-muted-foreground mb-2 flex items-center justify-center w-full h-full"
          key={day}
        >
          {day}
        </div>
      ))}
      {dates.map((date) => (
        <div
          className={cn(
            date.getMonth() !== month - 1 && "text-muted-foreground",
            "flex items-center justify-center w-full h-full text-sm hover:cursor-pointer hover:bg-secondary hover:rounded-xs"
          )}
          key={date.toDateString()}
        >
          {date.getDate()}
        </div>
      ))}
    </div>
  );
};
