export const generateCalendarDates = (year: number, month: number): Date[] => {
  if (month < 1 || month > 12) {
    throw new Error("Month should be between 1 and 12.");
  }

  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  const dates: Date[] = [];
  const currentDate = new Date(firstDayOfMonth);

  while (currentDate <= lastDayOfMonth) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  fillPreviousMonthDates(dates, year, month);
  fillNextMonthDates(dates, year, month);

  return dates;
};

function fillPreviousMonthDates(
  dates: Date[],
  year: number,
  month: number
): void {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const firstDayIndex = firstDayOfMonth.getDay();

  if (firstDayIndex !== 0) {
    const previousMonth = month - 1 === 0 ? 11 : month - 2;
    const previousYear = month - 1 === 0 ? year - 1 : year;

    const lastDayOfPreviousMonth = new Date(previousYear, previousMonth + 1, 0);
    const daysToFill = firstDayIndex;

    const previousMonthDates: Date[] = [];

    for (let i = 0; i < daysToFill; i++) {
      const dayToAdd = new Date(lastDayOfPreviousMonth);
      dayToAdd.setDate(lastDayOfPreviousMonth.getDate() - daysToFill + i + 1);
      previousMonthDates.push(dayToAdd);
    }

    dates.unshift(...previousMonthDates);
  }
}

function fillNextMonthDates(dates: Date[], year: number, month: number): void {
  const lastDayOfMonth = new Date(year, month, 0);
  const lastDayIndex = lastDayOfMonth.getDay();

  if (lastDayIndex !== 6) {
    const nextMonth = month === 12 ? 0 : month;
    const nextYear = month === 12 ? year + 1 : year;

    const firstDayOfNextMonth = new Date(nextYear, nextMonth, 1);
    const daysToFill = 6 - lastDayIndex;

    for (let i = 1; i <= daysToFill; i++) {
      const dayToAdd = new Date(firstDayOfNextMonth);
      dayToAdd.setDate(firstDayOfNextMonth.getDate() + i - 1);
      dates.push(dayToAdd);
    }
  }
}
