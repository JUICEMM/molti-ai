import { useDataRowSelectionContext } from "@/context/page/hotspot/DataRowSelectionContext";
import { Grid, Col } from "@tremor/react";
import type { AreaChartDataItem } from "types/chartType";
import AreaChartComponent from "./chart/AreaChartComponent";
import BarChartComponent from "./chart/BarChartComponent";
import DonutChartComponent from "./chart/DonutChartComponent";
import LineChartComponent from "./chart/LineChartComponent";
import ScatterChartComponent from "./chart/ScatterChartComponent";

const DashboardRenderSection = () => {

  //勾選表格行位後，這裡的rowSelection會更新，未來設計會將rowSelection作為參數傳入各個ChartComponent
  const { rowSelection, setRowSelection } = useDataRowSelectionContext();

  const chartdata_solo: Array<AreaChartDataItem> = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
    },
  ];
  const chartdata_comparation: Array<AreaChartDataItem> = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];
  return (
    <div className="mx-auto w-[90%] py-10">
      <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-2">
        <Col numColSpan={2} numColSpanLg={1}>
          <LineChartComponent data={chartdata_solo} />
        </Col>
        <Col numColSpan={2} numColSpanLg={1}>
          <AreaChartComponent data={chartdata_comparation} />
        </Col>
        <Col numColSpan={2} numColSpanLg={1}>
          <BarChartComponent />
        </Col>
        <Col numColSpan={2} numColSpanLg={1}>
          <DonutChartComponent />
        </Col>
        <Col numColSpan={2} numColSpanLg={1}>
          <ScatterChartComponent />
        </Col>
      </Grid>
    </div>
  );
};

export default DashboardRenderSection;
