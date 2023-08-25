import { twMerge } from "tailwind-merge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type SelectMenuProps = {
  placeholder: string;
  data: Array<string>;
  className?: string;
  setState?: (State: string) => void;
  field:any
};

const SelectMenu = React.forwardRef(
  ({ placeholder, data, className, setState,field }: SelectMenuProps,ref) => {
    return (
      <Select
        onValueChange={(e) => {
          if (setState) {
            setState(e)
            field.onChange(e);
          }
          null;
        }}
      >
        <SelectTrigger
          id="framework"
          className={twMerge(
            "hover:border-teal-500 focus:ring-teal-500",
            className
          )}
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
  }
);

export default SelectMenu;
