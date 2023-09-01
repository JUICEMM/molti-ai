import { generateCategories } from "@/lib/page/keyword/dashboardSection/chart/generateCategories";
import { generateRow } from "@/lib/page/keyword/dashboardSection/chart/generateRow";
import { generateValueFormatter } from "@/lib/page/keyword/dashboardSection/chart/generateValueFormatter";
import { LineChart, Card, Title } from "@tremor/react";
import type { LineChartDataItem } from "chartType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/style/utils";

type LineChartComponentProps = {
  data: LineChartDataItem[];
};

const LineChartComponent = ({ data }: LineChartComponentProps) => {

  const categories = generateCategories(data);
  const row = generateRow(data);
  const dataFormatter = generateValueFormatter();

  return (
    <Card>
      <Title>{categories}歷史趨勢圖</Title>
      <div className="flex justify-end">
        <div className="w-1/4">
          <Select>
            <SelectTrigger
              id="framework"
              className={cn("hover:border-teal-500 focus:ring-teal-500")}
            >
              <SelectValue placeholder="關聯字" />
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
        <div className="w-1/4 ml-2">
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
      <LineChart
        className="mt-6"
        data={data}
        index={row}
        categories={categories}
        colors={["emerald", "gray"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default LineChartComponent;
