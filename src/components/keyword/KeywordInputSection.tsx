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
import { useState } from "react";
import { CountryWebsites } from "type";
import SelectMenu from "../SelectMenu";
import { Button } from "../ui/button";

const country_data = ["台灣", "美國", "日本", "英國"];
const ecommerce_data: CountryWebsites[] = [
  { 台灣: ["蝦皮", "MOMO", "露天拍賣", "Rakutan"] },
  { 日本: ["Amazon", "Yahoo! JAPAN", "Rakutan"] },
  { 美國: ["Amazon"] },
];
const category_data = ["家具", "電子", "飲食", "美妝", "其他"];
const time_data = ["過去7天", "過去14天", "過去30天", "過去5個月"];
const KeywordInputSection = () => {
  const [country, setCountry] = useState("台灣");
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-teal-500 to-teal-600 p-5">
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
              <div className="flex flex-col items-center gap-2 sm:flex-row">
                <SelectMenu
                  placeholder="請選擇地區..."
                  data={country_data}
                  setCountry={setCountry}
                />
                <SelectMenu
                  placeholder="請選擇電商..."
                  data={
                    ecommerce_data.find((item) => item[country])?.[country] ||
                    []
                  }
                />
                <SelectMenu
                  placeholder="請選擇商品分類..."
                  data={category_data}
                />
                <SelectMenu placeholder="請選擇時間段..." data={time_data} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">關鍵字:</Label>
                <Input id="name" placeholder="請輸入關鍵字..." />
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
  );
};

export default KeywordInputSection;
