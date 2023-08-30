import { Card } from "@tremor/react";
import { Title, AreaChart } from "@tremor/react";
import type { AreaChartDataItem } from "chartType";

type AreaChartComponentProps = {
  data: AreaChartDataItem[];
};

const AreaChartComponent = ({ data }: AreaChartComponentProps) => {
  const dataFormatter = (number: number) => {
    return "$" + Intl.NumberFormat("us").format(number).toString();
  };
  
  const dataObject: AreaChartDataItem = data[0]!;

  const time = data.pop()?.date!;
  const keysArray = Object.keys(dataObject).filter((key) => key !== "date");

  return (
    <Card>
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="mt-4 h-72"
        data={data}
        index={time}
        categories={keysArray}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaChartComponent;