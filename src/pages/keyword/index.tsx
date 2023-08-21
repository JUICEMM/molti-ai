import { columns } from "@/components/analysisTable/Columns";
import { DataTable } from "@/components/analysisTable/DataTable";
import Navbar from "@/components/global/Navbar/Navbar";
import SelectMenu from "@/components/SelectMenu";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataAnalysis, Payment } from "type";

const country_data = ["台灣", "美國", "日本", "英國"];
const ecommerce_data = ["蝦皮", "MOMO", "露天拍賣", "淘寶"];
const category_data = ["家具", "電子", "飲食", "美妝", "其他"];
const time_data = ["過去7天", "過去14天", "過去30天", "過去5個月"];

export const data: DataAnalysis[] = Array.from({ length: 100 }).map(() => ({
  id: "string",
  keyword: "string",
  category: "string",
  searchAveragePerDay: "string",
  searchAveragePerMonthGrowthRate: "string",
  ppc: "string",
  productAveragePrice: "string",
}));

const index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[80px]">
        <div className="flex items-center justify-center">
          <Card className="w-[90%]">
            <CardHeader>
              <CardTitle>關鍵字搜索</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">關鍵字</Label>
                    <Input id="name" placeholder="請輸入關鍵字..." />
                  </div>
                  <div className="flex flex-col items-center gap-1 sm:flex-row">
                    <SelectMenu placeholder="國家" data={country_data} />
                    <SelectMenu placeholder="電商" data={ecommerce_data} />
                    <SelectMenu placeholder="商品分類" data={category_data} />
                    <SelectMenu placeholder="間隔" data={time_data} />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <div className="flex items-center gap-5">
                <Button variant="outline" className="">
                  重置
                </Button>
                <Button className="bg-teal-400 text-white hover:bg-teal-500">
                  查詢
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="p-4">
          <DataTable columns={columns} data={data} />
        </div>
      </main>
    </>
  );
};

export default index;
