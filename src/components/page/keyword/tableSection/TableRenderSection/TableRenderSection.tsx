import TableRenderHeader from "./TableRenderHeader";
import { columns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/Columns";
import { DataTable } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/DataTable";
import type { DataAnalysisColumnsTypes } from "types/dataType";

{
  /*Fake data(之後可以呼叫真資料後請將此刪掉)*/
}
export const data: DataAnalysisColumnsTypes[] = [
  {
    id: "1",
    關聯字: "蘋果",
    商品分類: "水果",
    平均日搜索量: 1000,
    平均月搜索增長率: 0.1,
    ppc競價: 0.5,
    產品平均價格: 1.0,
  },
  {
    id: "2",
    關聯字: "汽車",
    商品分類: "交通工具",
    平均日搜索量: 2000,
    平均月搜索增長率: 0.05,
    ppc競價: 1.0,
    產品平均價格: 25000.0,
  },
  {
    id: "3",
    關聯字: "筆記型電腦",
    商品分類: "電子產品",
    平均日搜索量: 500,
    平均月搜索增長率: 0.08,
    ppc競價: 2.0,
    產品平均價格: 800.0,
  },
  {
    id: "4",
    關聯字: "書籍",
    商品分類: "書籍",
    平均日搜索量: 800,
    平均月搜索增長率: 0.12,
    ppc競價: 0.75,
    產品平均價格: 20.0,
  },
  {
    id: "5",
    關聯字: "鞋子",
    商品分類: "時尚",
    平均日搜索量: 600,
    平均月搜索增長率: 0.07,
    ppc競價: 1.2,
    產品平均價格: 60.0,
  },
  {
    id: "6",
    關聯字: "相機",
    商品分類: "電子產品",
    平均日搜索量: 300,
    平均月搜索增長率: 0.06,
    ppc競價: 1.5,
    產品平均價格: 500.0,
  },
  {
    id: "7",
    關聯字: "吉他",
    商品分類: "音樂",
    平均日搜索量: 400,
    平均月搜索增長率: 0.09,
    ppc競價: 0.8,
    產品平均價格: 300.0,
  },
  {
    id: "8",
    關聯字: "手錶",
    商品分類: "時尚",
    平均日搜索量: 700,
    平均月搜索增長率: 0.11,
    ppc競價: 1.3,
    產品平均價格: 150.0,
  },
  {
    id: "9",
    關聯字: "手機",
    商品分類: "電子產品",
    平均日搜索量: 1200,
    平均月搜索增長率: 0.15,
    ppc競價: 2.5,
    產品平均價格: 700.0,
  },
  {
    id: "10",
    關聯字: "桌子",
    商品分類: "家具",
    平均日搜索量: 400,
    平均月搜索增長率: 0.04,
    ppc競價: 0.6,
    產品平均價格: 200.0,
  },
];

type TableRenderSectionProps = {
  iframeUrl: string;
};

const TableRenderSection = ({ iframeUrl }: TableRenderSectionProps) => {
  return (
    <div className="p-1 md:p-8 bg-slate-100">
      <div className="rounded-md border-0 bg-white">
        <iframe
          src={iframeUrl}
          width={"100%"}
          height="600"
          allowFullScreen
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default TableRenderSection;
