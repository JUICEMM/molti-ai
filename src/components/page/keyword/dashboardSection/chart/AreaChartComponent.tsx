import { generateCategories } from "@/lib/page/keyword/dashboardSection/chart/generateCategories";
import { generateRow } from "@/lib/page/keyword/dashboardSection/chart/generateRow";
import { generateValueFormatter } from "@/lib/page/keyword/dashboardSection/chart/generateValueFormatter";
import { Card } from "@tremor/react";
import { Title, AreaChart } from "@tremor/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { AreaChartDataItem } from "types/chartType";
import { cn } from "@/lib/utils";

type AreaChartComponentProps = {
  data: Array<AreaChartDataItem>;
};

const AreaChartComponent = ({ data }: AreaChartComponentProps) => {
  const column = generateCategories(data);
  const row = generateRow(data);
  const dataFormatter = generateValueFormatter();

  return (
    <Card>
      <Title>關鍵字比對趨勢圖</Title>
      <div className="flex justify-end">
        <div className="w-1/4">
          <Select>
            <SelectTrigger
              id="framework"
              className={cn("hover:border-teal-500 focus:ring-teal-500")}
            >
              <SelectValue placeholder="時間區隔" />
            </SelectTrigger>

            <SelectContent position="popper">
              {["123","456","789"].map((item) => (
                <SelectItem key={item} value={item.toLowerCase()}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <AreaChart
        className="mt-4 h-72"
        data={data}
        index={row}
        categories={column}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaChartComponent;
