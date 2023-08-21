import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectMenuProps = {
  placeholder?: string;
  data: Array<string>;
};

const SelectMenu = ({ placeholder, data }: SelectMenuProps) => {
  return (
    <Select>
      <SelectTrigger id="framework">
        <SelectValue placeholder={`${placeholder}`} />
      </SelectTrigger>
      <SelectContent position="popper">
        {data.map((item) => (
            <SelectItem key={item} value={item.toLowerCase()}>{item}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
