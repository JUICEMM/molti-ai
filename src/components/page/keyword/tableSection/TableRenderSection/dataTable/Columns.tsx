import type { ColumnDef } from "@tanstack/react-table";
import type { DataAnalysisColumnsTypes } from "types/dataType";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<DataAnalysisColumnsTypes>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "關聯字",
    header: "關鍵字",
    cell: ({ row }) => (
      <div className="w-max">{row.getValue("關聯字")}</div>
    ),
  },
  {
    accessorKey: "商品分類",
    header: "商品分類",
    cell: ({ row }) => (
      <div className="w-max">{row.getValue("商品分類")}</div>
    ),
  },
  {
    accessorKey: "平均日搜索量",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-max"
        >
          平均日搜索量
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("平均日搜索量")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "平均月搜索增長率",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-max"
        >
          平均月搜索量增長率
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">
        {row.getValue("平均月搜索增長率")}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "ppc競價",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-max"
        >
          PPC競價
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("ppc競價")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "產品平均價格",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-max"
        >
          產品平均價格
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("產品平均價格")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
];
