import { LineChart, Card, Title } from "@tremor/react";
import type { AreaChartDataItem, LineChartDataItem } from "chartType";

type LineChartComponentProps = {
    data: LineChartDataItem[];
}

const LineChartComponent = ({data}: LineChartComponentProps) => {

  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;
    const dataObject: AreaChartDataItem = data[0]!
    const keysArray = Object.keys(dataObject).filter((key) => key !== "date");
  
    const time = Object.keys(data[0]!)[0]!;
  return (
    <Card>
      <Title>Export/Import Growth Rates (1970 to 2021)</Title>
      <LineChart
        className="mt-6"
        data={data}
        index={time}
        categories={keysArray}
        colors={["emerald", "gray"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default LineChartComponent;
