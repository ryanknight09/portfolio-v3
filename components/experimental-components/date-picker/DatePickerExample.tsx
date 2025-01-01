"use client";

import { useState } from "react";
import { DatePicker } from "./DatePicker";

export const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-10">
      Select a data...
      <div className="flex-col lg:flex-row flex gap-8 lg:gap-0 sm:justify-around items-center">
        <div className="w-full sm:max-w-md">
          <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
        </div>
        <p className="text-muted-foreground text-lg">
          Selected date:{" "}
          <span className="text-primary">{selectedDate?.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};
