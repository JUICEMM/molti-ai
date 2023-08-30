import { columns } from "@/components/analysisTable/Columns";
import { DataTable } from "@/components/analysisTable/DataTable";
import { Button } from "@/components/ui/button";

import DownloadIcon from "@/styles/icon/DownloadIcon";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { twMerge } from "tailwind-merge";

import type { DataAnalysis } from "type";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Form, FormControl, FormField } from "@/components/ui/form";

const filter_data = ["平均日搜索量", "月增量搜索率", "PPC競價", "產品平均價格"];
const sequence_data = ["降續", "升序"];

export const data: DataAnalysis[] = Array.from({ length: 10 }).map(() => ({
  id: "string",
  keyword: "string",
  category: "string",
  searchAveragePerDay: "string",
  searchAveragePerMonthGrowthRate: "string",
  ppc: "string",
  productAveragePrice: "string",
}));

const formSchema = z.object({
  filter: z.string(),
  sequence: z.string(),
});

const KeywordRenderSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filter: "",
      sequence: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="bg-gradient-to-b from-teal-600 to-teal-500 p-4">
      <div className="mx-auto w-[90%] rounded-md bg-white">
        {/*DataTable Header*/}
        <div className="flex flex-col md:flex-row md:items-center justify-between p-4">
          <div className="flex items-center gap-1 text-sm">
            <p>搜索資料數量:</p>
            <span>12437</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <Button
              variant={"outline"}
              className="flex items-center gap-1 bg-teal-500 text-white hover:border-teal-400 hover:bg-white hover:text-teal-500"
            >
              <DownloadIcon />
              <span>匯出資料</span>
            </Button>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col border-t py-2 md:flex-row md:border-y-0 gap-2"
              >
                <FormField
                  control={form.control}
                  name="filter"
                  render={({ field }) => (
                    <Select
                      onValueChange={(e) => {
                        field.onChange(e);
                      }}
                      // defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          id="framework"
                          className={twMerge(
                            " hover:border-teal-500 focus:ring-teal-500"
                          )}
                        >
                          <SelectValue placeholder="排序變數..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent position="popper">
                        {filter_data.map((item) => (
                          <SelectItem key={item} value={item.toLowerCase()}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sequence"
                  render={({ field }) => (
                    <Select
                      onValueChange={(e) => {
                        field.onChange(e);
                      }}
                      // defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          id="framework"
                          className={twMerge(
                            " hover:border-teal-500 focus:ring-teal-500"
                          )}
                        >
                          <SelectValue placeholder="排序順序..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent position="popper">
                        {sequence_data.map((item) => (
                          <SelectItem key={item} value={item.toLowerCase()}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <Button
                  variant={"outline"}
                  className="flex items-center gap-1 w-[150px] border-teal-500 text-teal-600 hover:bg-white hover:text-teal-500"
                >
                  <span>確定</span>
                </Button>
              </form>
            </Form>
          </div>
        </div>
        {/*DataTable*/}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default KeywordRenderSection;
