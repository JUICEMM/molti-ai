import { twMerge } from "tailwind-merge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectMenuProps = {
  placeholder: string;
  data: Array<string>;
  className?: string;
  setCountry?: (country: string) => void;
};

const SelectMenu = ({
  placeholder,
  data,
  className,
  setCountry,
}: SelectMenuProps) => {
  return (
    <Select
      onValueChange={(e) => {
        if (setCountry) setCountry(e);
        null;
      }}
    >
      <SelectTrigger
        id="framework"
        className={twMerge("hover:border-teal-500 focus:ring-teal-500", className)}
      >
        <SelectValue placeholder={`${placeholder}`} />
      </SelectTrigger>
      <SelectContent position="popper">
        {data.map((item) => (
          <SelectItem key={item} value={item.toLowerCase()}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
