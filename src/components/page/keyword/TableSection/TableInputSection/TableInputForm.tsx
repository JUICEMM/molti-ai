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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CountryEcommerceWebsitesDataTypes } from "types/dataType";

//各個Select component的選項
const country_data: Array<string> = ["台灣", "美國", "日本", "英國"];
const ecommerce_data: Array<CountryEcommerceWebsitesDataTypes> = [
  { 台灣: ["蝦皮", "MOMO", "露天拍賣", "Rakutan"] },
  { 日本: ["Amazon", "Yahoo! JAPAN", "Rakutan"] },
  { 美國: ["Amazon"] },
];
const category_data: Array<string> = [
  "家具",
  "電子",
  "飲食",
  "美妝",
  "保健食品",
];
const time_data: Array<string> = [
  "過去7天",
  "過去14天",
  "過去30天",
  "過去5個月",
];

const formSchema = z.object({
  country: z.string().nonempty({ message: "國家不能為空值" }),
  store: z.string().nonempty({ message: "電商不能為空值" }),
  category: z.string().nonempty({ message: "商品分類不能為空值" }),
  time: z.string(),
  keyword: z.string(),
});

const TableInputForm = () => {
  const [country, setCountry] = useState("");

  //當使用者選擇了某一國家，我們只會取得該國家的電商網站
  const currentCountryStores: string[] = useMemo(
    () => ecommerce_data.find((item) => item[country])?.[country] ?? [],
    [country]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      store: "",
      category: "",
      time: "",
      keyword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  <FormLabel className="text-teal-700">國家:</FormLabel>
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
                    <SelectContent position="popper">
                      {country_data.map((item) => (
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
                  <FormLabel className="text-teal-700">電商:</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger
                        id="framework"
                        className={twMerge(
                          "hover:border-teal-500 focus:ring-teal-500"
                        )}
                      >
                        <SelectValue placeholder="請選擇電商..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
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
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-teal-700">商品分類:</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger
                        id="framework"
                        className={twMerge(
                          "hover:border-teal-500 focus:ring-teal-500"
                        )}
                      >
                        <SelectValue placeholder="請選擇商品分類..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
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
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-teal-700">時間區隔:</FormLabel>
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
                    <SelectContent position="popper">
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
            />
          </div>
          <div className="mt-4 flex flex-col space-y-1.5 md:flex-row">
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
          </div>
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
