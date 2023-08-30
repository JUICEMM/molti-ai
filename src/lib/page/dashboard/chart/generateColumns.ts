import type { AreaChartDataItem } from "chartType";

export function generateColumns(data: Array<AreaChartDataItem>) {
  const dataObject: AreaChartDataItem = data[0]!;
  const chartColumn: Array<string> = Object.keys(dataObject).filter(
    (key) => key !== "date"
  );
  return chartColumn;
}
