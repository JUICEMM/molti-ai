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
  setIsIframeOpen: Dispatch<SetStateAction<boolean>>
};

const TableInputSection = ({ setIframeUrl, setTwitchFilterCategory, setIsIframeOpen }: TableInputSectionProps) => {
  return (
    <div className="p-1 md:p-8 bg-slate-100">
      <div className="flex items-center justify-center">
        <Card className="w-full border-0">
          <CardHeader>
            <CardTitle className="text-3xl">內容創作工具</CardTitle>
            <CardDescription>各個熱點排行讓您的短影音更吸引人</CardDescription>
          </CardHeader>
          <CardContent>
            <TableInputForm setIframeUrl={setIframeUrl} setTwitchFilterCategory={setTwitchFilterCategory} setIsIframeOpen={setIsIframeOpen}/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableInputSection;
