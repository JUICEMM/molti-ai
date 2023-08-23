import { columns } from "@/components/analysisTable/Columns";
import { DataTable } from "@/components/analysisTable/DataTable";
import SelectMenu from "@/components/SelectMenu";
import { Button } from "@/components/ui/button";

import DownloadIcon from "@/styles/icon/DownloadIcon";

import { DataAnalysis } from "type";

const filter_data = ["平均日搜索量", "月增量搜索率", "PPC競價", "產品平均價格"];
const sequence_data = ["降續", "升序"];

export const data: DataAnalysis[] = Array.from({ length: 100 }).map(() => ({
  id: "string",
  keyword: "string",
  category: "string",
  searchAveragePerDay: "string",
  searchAveragePerMonthGrowthRate: "string",
  ppc: "string",
  productAveragePrice: "string",
}));

const KeywordRenderSection = () => {
  return (
    <div className="bg-gradient-to-b from-teal-600 to-teal-500 p-4">
      <div className="mx-auto w-[90%] rounded-md bg-white">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-1 text-sm">
            <p>搜索資料數量:</p>
            <span>12437</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={"outline"}
              className="flex items-center gap-1 bg-teal-400 text-white hover:border-teal-500 hover:bg-white"
            >
              <DownloadIcon />
              <span>匯出資料</span>
            </Button>

            <SelectMenu
              placeholder="排序標題..."
              data={filter_data}
              className="w-[180px]"
            />
            <SelectMenu
              placeholder="順序..."
              data={sequence_data}
              className="w-[100px]"
            />
            <Button
              variant={"outline"}
              className="flex items-center gap-1 border-teal-500 text-teal-600 hover:bg-white hover:text-teal-500"
            >
              <span>確定</span>
            </Button>
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default KeywordRenderSection;
