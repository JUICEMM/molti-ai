import { columns } from "@/components/page/keyword/keywordSection/analysisTable/Columns";
import { DataTable } from "@/components/page/keyword/keywordSection/analysisTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField } from "@/components/ui/form";
import DownloadIcon from "@/styles/icon/DownloadIcon";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import type { DataAnalysisColumnsTypes } from "types/dataType";

{/*Select content*/}
const filter_data: Array<string> = [
  "平均日搜索量",
  "月增量搜索率",
  "PPC競價",
  "產品平均價格",
];
const sequence_data: Array<string> = ["降續", "升序"];

{/*Fake data*/}
export const data: DataAnalysisColumnsTypes[] = Array.from({ length: 10 }).map(
  () => ({
    id: "string",
    keyword: "string",
    category: "string",
    searchAveragePerDay: "string",
    searchAveragePerMonthGrowthRate: "string",
    ppc: "string",
    productAveragePrice: "string",
  })
);

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
    <div className="p-4">
      <div className="mx-auto w-[90%] rounded-md border border-teal-500 bg-white">
        {/*DataTable Header*/}
        <div className="flex flex-col justify-between rounded-t-md bg-teal-400 p-4 md:flex-row md:items-center">
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 border-t py-2 md:flex-row md:border-y-0"
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
                  className="flex w-[150px] items-center gap-1 border-teal-500 text-teal-600 hover:bg-white hover:text-teal-500"
                >
                  <span>確定</span>
                </Button>
              </form>
            </Form>
          </div>
        </div>
        {/*DataTable*/}
        <div className="h-[500px] overflow-scroll rounded-md">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default KeywordRenderSection;
