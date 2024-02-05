import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import type { HotSpotDataColumnsTypes_TwitchStreams } from "types/dataType";

export const TwitchTopStreamsColumns: ColumnDef<HotSpotDataColumnsTypes_TwitchStreams>[] = [
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
    accessorKey: "user_name",
    header: "實況主名稱",
    cell: ({ row }) => <div className="w-max">{row.getValue("user_name")}</div>,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-max"
        >
          "實況名稱"
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "game_name",
    header: "遊戲名稱",
    cell: ({ row }) => <div className="w-max">{row.getValue("game_name")}</div>,
  },
  {
    accessorKey: "viewer_count",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-max"
        >
          "觀看人數"
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("viewer_count")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "language",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-max"
        >
          "語言"
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("language")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "tags",
    header: "標籤",
    cell: ({ row }) => <div>{row.getValue("tags")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
];
