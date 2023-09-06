import { columns } from "@/components/page/keyword/keywordSection/analysisTable/Columns";
import { DataTable } from "@/components/page/keyword/keywordSection/analysisTable/DataTable";
import { Button } from "@/components/ui/button";
import DownloadIcon from "@/styles/icon/DownloadIcon";
import type { DataAnalysisColumnsTypes } from "types/dataType";

{/*Fake data(之後可以呼叫真資料後請將此刪掉)*/}
export const data: DataAnalysisColumnsTypes[] = Array.from({ length: 10 }).map(
  () => ({
    id: "string",
    keyword: "string",
    category: "string",
    searchAveragePerDay: "string",
    searchAveragePerMonthGrowthRate: "string",
    ppc: "string",
    productAveragePrice: "string",
  })
);

const KeywordRenderSection = () => {
  return (
    <div className="p-8">
      <div className="rounded-md border border-teal-500 bg-white">
        {/*DataTable Header*/}
        <div className="flex flex-col justify-between rounded-t-md bg-teal-400 p-4 md:flex-row md:items-center">
          <div className="flex items-center gap-1 rounded-md text-sm">
            <p className="font-bold text-white">搜索資料數量:</p>
            <span className="text-red-700">12437</span>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <Button
              variant={"outline"}
              className="flex items-center gap-1 bg-teal-500 text-white hover:border-teal-400 hover:bg-white hover:text-teal-500"
            >
              <DownloadIcon />
              <span>匯出資料</span>
            </Button>
          </div>
        </div>
        {/*DataTable*/}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default KeywordRenderSection;
