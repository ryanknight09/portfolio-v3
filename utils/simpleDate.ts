export function simpleDate(dateStr?: string | null) {
  if (dateStr) {
    const date = new Date(dateStr);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    };

    return date.toLocaleDateString("en-US", options);
  }
}
