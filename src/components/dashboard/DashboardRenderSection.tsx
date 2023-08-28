import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import AreaChartComponent from "../global/chart/AreaChart";
import BarChartComponent from "../global/chart/BarChart";
import DonutChartComponent from "../global/chart/DonutChart";
import LineChartComponent from "../global/chart/LineChart";
import ScatterChartComponent from "../global/chart/ScatterChart";


const DashboardRenderSection = () => {
  const chartdata = [
    {
      date: "Jan 22",
      "SemiAnalysis": 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      "SemiAnalysis": 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      "SemiAnalysis": 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      "SemiAnalysis": 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      "SemiAnalysis": 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      "SemiAnalysis": 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];
  return (
    <div className="mx-auto w-[90%] py-10">
      <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-2">
        <Col numColSpan={1} numColSpanLg={1}>
          <AreaChartComponent data={chartdata} />
        </Col>
        <Col numColSpan={1} numColSpanLg={1}>
          <LineChartComponent  data={chartdata} />
        </Col>
        <Col>
          <BarChartComponent />
        </Col>
        <Col>
          <DonutChartComponent />
        </Col>
        <Col>
          <ScatterChartComponent />
        </Col>
      </Grid>
    </div>
  );
};

export default DashboardRenderSection;
