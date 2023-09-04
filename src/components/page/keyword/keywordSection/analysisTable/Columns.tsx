"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { DataAnalysis } from "types/dataType"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<DataAnalysis>[] = [
  {
    accessorKey: "keyword",
    header: "關鍵字",
  },
  {
    accessorKey: "category",
    header: "分類",
  },
  {
    accessorKey: "searchAveragePerDay",
    header: "平均日搜索量",
  },
  {
    accessorKey: "searchAveragePerMonthGrowthRate",
    header: "月搜索量增長率",
  },
  {
    accessorKey: "ppc",
    header: "PPC競價",
  },
  {
    accessorKey: "productAveragePrice",
    header: "產品平均價格",
  },
]
