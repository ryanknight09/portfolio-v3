import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  year: number;
  onChange: (month: number) => void;
}

export const MonthPicker = ({ year, onChange }: Props) => {
  const months = Array.from({ length: 12 }, (_, index) =>
    new Date(year, index).toLocaleString("default", { month: "long" })
  );

  const indexOfCurrentMonth = new Date().getMonth();

  return (
    <Select onValueChange={(month) => onChange(parseInt(month))}>
      <SelectTrigger className="w-32">
        <SelectValue
          placeholder={months[indexOfCurrentMonth]}
          defaultValue={months[indexOfCurrentMonth]}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {months.map((month, index) => (
            <SelectItem key={index} value={String(index + 1)}>
              {month}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
