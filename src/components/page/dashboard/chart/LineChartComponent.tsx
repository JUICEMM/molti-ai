import { generateColumns } from "@/lib/page/dashboard/chart/generateColumns";
import { generateRow } from "@/lib/page/dashboard/chart/generateRow";
import { generateValueFormatter } from "@/lib/page/dashboard/chart/generateValueFormatter";
import { LineChart, Card, Title } from "@tremor/react";
import type { AreaChartDataItem, LineChartDataItem } from "chartType";

type LineChartComponentProps = {
  data: LineChartDataItem[];
};

const LineChartComponent = ({ data }: LineChartComponentProps) => {
  const column = generateColumns(data);
  const row = generateRow(data);
  const dataFormatter = generateValueFormatter();
  return (
    <Card>
      <Title>Export/Import Growth Rates (1970 to 2021)</Title>
      <LineChart
        className="mt-6"
        data={data}
        index={row}
        categories={column}
        colors={["emerald", "gray"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default LineChartComponent;
