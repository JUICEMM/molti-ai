import { Button } from "@/components/ui/button";
import DownloadIcon from "@/styles/icon/DownloadIcon";
import React from "react";

const TableHeader = () => {
  return (
    <div className="flex flex-col justify-between rounded-t-md bg-teal-400 px-4 py-2 md:flex-row md:items-center">
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
  );
};

export default TableHeader;
