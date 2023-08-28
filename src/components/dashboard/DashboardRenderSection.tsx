import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import AreaChartComponent from "../global/chart/AreaChart";
import BarChartComponent from "../global/chart/BarChart";
import DonutChartComponent from "../global/chart/DonutChart";
import LineChartComponent from "../global/chart/LineChart";
import ScatterChartComponent from "../global/chart/ScatterChart";

const DashboardRenderSection = () => {
  return (
    <div className="mx-auto w-[90%] py-10">
      <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-2">
        <Col numColSpan={1} numColSpanLg={1}>
          <AreaChartComponent />
        </Col>
        <Col numColSpan={1} numColSpanLg={1}>
          <LineChartComponent />
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
