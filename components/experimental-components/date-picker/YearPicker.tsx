import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

const currentYear = new Date().getFullYear();
const years: string[] = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, index) => String(currentYear - index)
);

interface Props {
  onChange: (year: number) => void;
}

export const YearPicker = ({ onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const onYearSelect = (year: string) => {
    setSelectedYear(year);
    onChange(parseInt(year));
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-32 justify-between"
        >
          {selectedYear}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-0">
        <Command>
          <CommandInput placeholder="search..." />
          <CommandList>
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {years.map((year) => (
                <CommandItem key={year} value={year} onSelect={onYearSelect}>
                  {year}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedYear === year ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
