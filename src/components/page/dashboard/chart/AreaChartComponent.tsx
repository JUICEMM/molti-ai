import { generateColumns } from "@/lib/page/dashboard/chart/generateColumns";
import { generateRow } from "@/lib/page/dashboard/chart/generateRow";
import { generateValueFormatter } from "@/lib/page/dashboard/chart/generateValueFormatter";
import { Card } from "@tremor/react";
import { Title, AreaChart } from "@tremor/react";
import type { AreaChartDataItem } from "chartType";

type AreaChartComponentProps = {
  data: Array<AreaChartDataItem>
};

const AreaChartComponent = ({ data }: AreaChartComponentProps) => {

  const column = generateColumns(data)
  const row = generateRow(data)
  const dataFormatter = generateValueFormatter()

  return (
    <Card>
      <Title>關鍵字比對趨勢圖</Title>
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
