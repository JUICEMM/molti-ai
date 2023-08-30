import { Card } from "@tremor/react";
import { Title, AreaChart } from "@tremor/react";
import type { AreaChartDataItem } from "chartType";

type AreaChartComponentProps = {
  data: Array<AreaChartDataItem>
};

const AreaChartComponent = ({ data }: AreaChartComponentProps) => {
  console.log(data);

  const dataFormatter = (number: number) => {
    return "$" + Intl.NumberFormat("us").format(number).toString();
  };

  const dataObject: AreaChartDataItem = data[0]!
  const keysArray = Object.keys(dataObject).filter((key) => key !== "date");

  const time = Object.keys(data[0]!)[0]!;


  return (
    <Card>
      <Title>關鍵字比對趨勢圖</Title>
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
