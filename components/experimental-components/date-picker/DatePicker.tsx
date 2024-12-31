"use client";

import { generateCalendarDates } from "@/utils/generateDates";
import { useState } from "react";
import { Day } from "./Day";
import { Days } from "./Days";
import { MonthPicker } from "./MonthPicker";
import { YearPicker } from "./YearPicker";

interface Props {
  onChange: (date: Date) => void;
}

export const DatePicker = ({ onChange }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [year, setYear] = useState(new Date().getUTCFullYear());
  const [month, setMonth] = useState(new Date().getUTCMonth() + 1);

  const dates = generateCalendarDates(year, month);
  const isDateInCurrentMonth = (date: Date) => date.getMonth() === month - 1;

  const onDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <YearPicker onChange={setYear} />
        <MonthPicker year={year} onChange={setMonth} />
      </div>
      <div className="flex flex-col border gap-4 rounded-md p-3 w-full">
        <Days />
        <div className="grid grid-cols-7 gap-1 w-full">
          {dates.map((date) => (
            <Day
              key={date.getTime()}
              date={date}
              isSelected={date.getTime() === selectedDate?.getTime()}
              isInCurrentMonth={isDateInCurrentMonth(date)}
              onClick={onDateSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
