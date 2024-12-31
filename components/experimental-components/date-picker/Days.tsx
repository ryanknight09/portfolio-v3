const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Days = () => {
  return (
    <div className="grid grid-cols-7 gap-1 w-full">
      {days.map((day) => (
        <div
          className="text-xs text-muted-foreground mb-2 flex items-center justify-center w-full h-full"
          key={day}
        >
          {day}
        </div>
      ))}
    </div>
  );
};
