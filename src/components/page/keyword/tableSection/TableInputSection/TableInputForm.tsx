import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import type { CountryHotspotDataTypes } from "types/dataType";
import * as z from "zod";

//各個Select component的選項
const COUNTRY: Array<string> = ["全球", "台灣", "中國大陸"];
const HOTSPOT: Array<CountryHotspotDataTypes> = [
  { 全球: ["熱門網站排名"] },
  { 台灣: ["google趨勢", "youtube熱門"] },
  { 中國大陸: ["抖音", "小紅書", "微博"] },
];

const HOTSPOT_DATA: Array<{
  country: string;
  data: Array<{ store: string; iframeUrl: string }>;
}> = [
  {
    country: "全球",
    data: [
      {
        store: "熱門網站排名",
        iframeUrl: "https://www.similarweb.com/zh-tw/top-websites/",
      },
    ],
  },
  {
    country: "台灣",
    data: [
      {
        store: "google趨勢",
        iframeUrl:
          "https://trends.google.com.tw/trends/explore?geo=TW&hl=zh-TW",
      },
      {
        store: "youtube熱門",
        iframeUrl: "https://tw.noxinfluencer.com/youtube-video-rank",
      },
    ],
  },
  {
    country: "中國大陸",
    data: [
      {
        store: "抖音",
        iframeUrl: "https://douhot.douyin.com/ranking?active_tab=ranking_rise",
      },
      {
        store: "小紅書",
        iframeUrl: "https://www.qian-gua.com/rank/fans/1/1/20240115/93.html",
      },
      {
        store: "微博",
        iframeUrl: "https://www.kaolamedia.com/hot",
      },
    ],
  },
];

const formSchema = z.object({
  country: z.string().nonempty({ message: "國家不能為空值" }),
  store: z.string().nonempty({ message: "電商不能為空值" }),
});

type TableInputSectionProps = {
  setIframeUrl: Dispatch<SetStateAction<string>>;
};

const TableInputForm = ({ setIframeUrl }: TableInputSectionProps) => {
  const [country, setCountry] = useState("");

  //當使用者選擇了某一國家，我們只會取得該國家的電商網站
  const currentCountryStores: string[] = useMemo(
    () => HOTSPOT.find((item) => item[country])?.[country] ?? [],
    [country]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      store: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setIframeUrl(
      HOTSPOT_DATA.find((item) => item.country === values.country)?.data.find(
        (item) => item.store === values.store
      )?.iframeUrl ?? ""
    );
  }

  return (
    //這裡我們使用了Shadcn/ui的Form與Select，詳細資訊請看：https://ui.shadcn.com/docs/components/form
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full items-center gap-4">
          <div className="flex flex-col gap-2 text-black md:flex-row">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-teal-700">
                    地區:
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpOutlineIcon
                            sx={{ color: "orange", fontSize: "18px" }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>請選擇地區</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormLabel>
                  <Select
                    onValueChange={(e) => {
                      if (setCountry) {
                        setCountry(e);
                        field.onChange(e);
                      }
                      null;
                    }}
                  >
                    <FormControl>
                      <SelectTrigger
                        id="framework"
                        className={twMerge(
                          "hover:border-teal-500 focus:ring-teal-500"
                        )}
                      >
                        <SelectValue placeholder="請選擇國家..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      position="popper"
                      className="overflow-scroll max-h-[300px]"
                    >
                      {COUNTRY.map((item) => (
                        <SelectItem key={item} value={item.toLowerCase()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    <FormMessage className="py-2 pl-3" />
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="store"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-teal-700">
                    平台:
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpOutlineIcon
                            sx={{ color: "orange", fontSize: "18px" }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>選擇平台之前，請先選擇地區以方便做查詢</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger
                        id="framework"
                        className={twMerge(
                          "hover:border-teal-500 focus:ring-teal-500"
                        )}
                      >
                        <SelectValue placeholder="請選擇欲查詢平台..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      position="popper"
                      className="overflow-scroll max-h-[300px]"
                    >
                      {currentCountryStores.map((item) => (
                        <SelectItem key={item} value={item.toLowerCase()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    <FormMessage className="py-2 pl-3" />
                  </Select>
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-teal-700">
                    熱點分類:
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpOutlineIcon
                            sx={{ color: "orange", fontSize: "18px" }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>請選擇熱點分類</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger
                        id="framework"
                        className={twMerge(
                          "hover:border-teal-500 focus:ring-teal-500"
                        )}
                      >
                        <SelectValue placeholder="請選擇熱點分類..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper" className="overflow-scroll max-h-[300px]">
                      {category_data.map((item) => (
                        <SelectItem key={item} value={item.toLowerCase()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    <FormMessage className="py-2 pl-3" />
                  </Select>
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-teal-700">
                    時間區隔:
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpOutlineIcon
                            sx={{ color: "orange", fontSize: "18px" }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>選擇想要的資料時間範圍</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger
                        id="framework"
                        className={twMerge(
                          "hover:border-teal-500 focus:ring-teal-500"
                        )}
                      >
                        <SelectValue placeholder="請選擇時間區隔..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper" className="overflow-scroll max-h-[300px]">
                      {time_data.map((item) => (
                        <SelectItem key={item} value={item.toLowerCase()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    <FormMessage className="py-2 pl-3" />
                  </Select>
                </FormItem>
              )}
            /> */}
          </div>
          {/* <div className="mt-4 flex flex-col space-y-1.5 md:flex-row">
            <FormField
              control={form.control}
              name="keyword"
              render={({ field }) => (
                <div>
                  <Label htmlFor="name" className="text-teal-800">
                    關鍵字:
                  </Label>
                  <Input
                    id="keyword"
                    placeholder="請輸入關鍵字..."
                    className="ring-teal-500 hover:border-teal-500 focus:ring-teal-500"
                    {...field}
                  />
                </div>
              )}
            />
          </div> */}
        </div>
        <div className="flex justify-end py-5">
          <div className="flex items-center gap-5">
            <Button className="bg-teal-500 text-white hover:bg-teal-400">
              查詢
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default TableInputForm;
