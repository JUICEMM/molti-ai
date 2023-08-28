import { LineChart, Card, Title } from "@tremor/react";
import { LineChartDataItem } from "chartType";

type LineChartComponentProps = {
    data: LineChartDataItem[];
}

const LineChartComponent = ({data}: LineChartComponentProps) => {

  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;
  const dataObject: LineChartDataItem = data[0]!;

  const time = data.pop()?.date!;
  const keysArray = Object.keys(dataObject).filter((key) => key !== "date");
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
