import { AreaChartDataItem } from "chartType";

export function generateRow(data: Array<AreaChartDataItem>) {
  const chartRow: string = Object.keys(data[0]!)[0]!;
  return chartRow;
}
