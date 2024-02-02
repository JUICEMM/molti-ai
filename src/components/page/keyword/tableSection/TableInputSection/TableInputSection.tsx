import TableInputForm from "./TableInputForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dispatch, SetStateAction } from "react";
import { TwitchConfig } from "../TableSection";

type TableInputSectionProps = {
  setIframeUrl: Dispatch<SetStateAction<string>>;
  setTwitchFilterCategory: Dispatch<SetStateAction<TwitchConfig | {}>>;
};

const TableInputSection = ({ setIframeUrl, setTwitchFilterCategory }: TableInputSectionProps) => {
  return (
    <div className="p-1 md:p-8 bg-slate-100">
      <div className="flex items-center justify-center">
        <Card className="w-full border-0">
          <CardHeader>
            <CardTitle>內容創作工具</CardTitle>
            <CardDescription>各個熱點排行給您做參考</CardDescription>
          </CardHeader>
          <CardContent>
            <TableInputForm setIframeUrl={setIframeUrl} setTwitchFilterCategory={setTwitchFilterCategory} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableInputSection;
