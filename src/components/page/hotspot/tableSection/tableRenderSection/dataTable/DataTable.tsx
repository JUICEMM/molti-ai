import {
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDataRowSelectionContext } from "@/context/page/hotspot/DataRowSelectionContext";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { rowSelection, setRowSelection } = useDataRowSelectionContext();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      rowSelection,
      columnFilters,
      columnVisibility,
      sorting,
    },
  });

  {
    /* console.log() 如果不需要可以刪除 */
  }
  useEffect(() => {
    // console.log("rowSelection", rowSelection);
    // console.log("sorting", sorting);
    // console.log("columnFilters", columnFilters);
    // console.log("columnVisibility", columnVisibility);
  }, [rowSelection, sorting, columnFilters, columnVisibility]);

  return (
    <div className="rounded-md border-b bg-white">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between p-2">
        {/* <Input
          placeholder="尋找tags..."
          value={(table.getColumn("tags")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("tags")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-teal-500 outline-none focus:ring-0"
        /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto border border-teal-500 text-gray-500">
              顯示或隱藏欄位 <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-[500px] overflow-scroll rounded-md">
        <Table className="rounded-md">
          <TableHeader className="rounded-md">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="rounded-md">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="h-[60px]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
