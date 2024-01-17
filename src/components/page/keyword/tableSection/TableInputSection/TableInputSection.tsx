import TableInputForm from "./TableInputForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dispatch, SetStateAction } from "react";

type TableInputSectionProps = {
  setIframeUrl: Dispatch<SetStateAction<string>>;
};

const TableInputSection = ({ setIframeUrl }: TableInputSectionProps) => {
  return (
    <div className="p-1 md:p-8 bg-slate-100">
      <div className="flex items-center justify-center">
        <Card className="w-full border-0">
          <CardHeader>
            <CardTitle>關鍵字搜索</CardTitle>
            <CardDescription>選擇相關變數取得關鍵字</CardDescription>
          </CardHeader>
          <CardContent>
            <TableInputForm setIframeUrl={setIframeUrl}/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableInputSection;
