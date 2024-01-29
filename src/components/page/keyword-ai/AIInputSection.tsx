import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { fetchOpenAICompletion } from "@/utils/openai";
import { zodResolver } from "@hookform/resolvers/zod";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

const SOCIALMEDIA_DATA = [
  "Facebook",
  "Instagram",
  "Youtube",
  "Tiktok",
  "Twitch",
  "小紅書",
  "抖音",
];

type SocialMediaData = {
  socialMedia: string;
  socialMedia_category: string[];
};

type SocialMediaArray = SocialMediaData[];

//各個Select component的選項
const CATEGORY_DATA: SocialMediaArray = [
  {
    socialMedia: "小紅書",
    socialMedia_category: [
      "美妝",
      "時尚",
      "生活",
      "旅行",
      "美食",
      "手作",
      "文化",
      "教育",
      "科技",
    ],
  },
  {
    socialMedia: "抖音",
    socialMedia_category: ["搞笑", "才藝表演", "美妝", "時尚", "生活小技巧"],
  },
  {
    socialMedia: "Tiktok",
    socialMedia_category: ["搞笑", "才藝表演", "美妝", "時尚", "生活小技巧"],
  },
  {
    socialMedia: "Facebook",
    socialMedia_category: [
      "美妝",
      "時尚",
      "生活",
      "旅行",
      "美食",
      "手作",
      "文化",
      "教育",
      "科技",
    ],
  },
  {
    socialMedia: "Instagram",
    socialMedia_category: [
      "生活風格",
      "美食攝影",
      "旅遊",
      "時尚",
      "健身",
      "藝術",
    ],
  },
  {
    socialMedia: "Youtube",
    socialMedia_category: [
      "影片創作",
      "教育",
      "娛樂",
      "美食",
      "運動",
      "音樂",
      "新聞",
    ],
  },
  {
    socialMedia: "Twitch",
    socialMedia_category: [
      "美妝",
      "時尚",
      "生活",
      "旅行",
      "美食",
      "手作",
      "文化",
      "教育",
      "科技",
    ],
  },
];

const formSchema = z.object({
  socialMedia: z.string().nonempty({ message: "社群媒體不能為空值" }),
  category: z.string().nonempty({ message: "商品分類不能為空值" }),
  keyword: z.string(),
});

type AIInputSectionProps = {
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AIInputSection = ({ setResult, setIsLoading }: AIInputSectionProps) => {
  const [socialMedia, setSocialMedia] = useState("Tiktok");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      socialMedia: "",
      category: "",
      keyword: "",
    },
  });

  async function generateText({
    socialMedia,
    category,
    keyword,
  }: {
    socialMedia: string;
    category: string;
    keyword: string;
  }) {
    try {
      setIsLoading(true);
      const prompt = `請僅提供在 ${socialMedia}裡 ${category}分類中有關 ${keyword} 的前30個熱門社群標籤並且按照編號排下來，不要出現多餘的字詞`;
      console.log(prompt);
      const completion = await fetchOpenAICompletion(prompt);
      console.log(completion);
      setIsLoading(false);
      setResult(completion);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    generateText(values);
  }

  console.log(socialMedia);

  return (
    //這裡我們使用了Shadcn/ui的Form與Select，詳細資訊請看：https://ui.shadcn.com/docs/components/form

    <Card className="m-1 rounded-md border border-zinc-200 p-4 md:m-2">
      <CardHeader>
        <CardTitle>AI產生社群標籤</CardTitle>
        <CardDescription>請輸入相關變數取得社群標籤</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2 text-black md:flex-row">
                <FormField
                  control={form.control}
                  name="socialMedia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-teal-700">
                        社群分類:
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpOutlineIcon
                                sx={{ color: "orange", fontSize: "18px" }}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                請選擇分類及你想查詢的社群、分類及關鍵字，例如：
                                抖音 男性衣服
                                襯衫，以便我們幫你產生相關的社群標籤
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <Select onValueChange={(value)=>{
                        setSocialMedia(value)
                        field.onChange(value)
                      }}>
                        <FormControl>
                          <SelectTrigger
                            id="framework"
                            className={twMerge(
                              "hover:border-teal-500 focus:ring-teal-500"
                            )}
                          >
                            <SelectValue placeholder="請選擇社群..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent
                          position="popper"
                          className="overflow-scroll max-h-[300px]"
                        >
                          {SOCIALMEDIA_DATA.map((item) => (
                            <SelectItem
                              onClick={() =>
                                setSocialMedia(item)
                              }
                              key={item}
                              value={item}
                            >
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
              <div className="flex flex-col gap-2 text-black md:flex-row">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center text-teal-700">
                        社群分類:
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpOutlineIcon
                                sx={{ color: "orange", fontSize: "18px" }}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                請選擇分類及你想查詢的關鍵字，例如：女性衣著 及
                                短裙，以便我們幫你產生相關關鍵字
                              </p>
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
                            <SelectValue placeholder="請選擇分類..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent
                          position="popper"
                          className="overflow-scroll max-h-[300px]"
                        >
                          {CATEGORY_DATA.map((item) => {
                            if (item.socialMedia !== socialMedia) return;
                            return item.socialMedia_category!.map(
                              (category: string) => (
                                <SelectItem
                                  key={category}
                                  value={category.toLowerCase()}
                                >
                                  {category}
                                </SelectItem>
                              )
                            );
                          })}
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
            <p className="text-sm font-mono font-bold my-2 text-neutral-500">
              請選擇分類及你想查詢的社群、分類及關鍵字，例如： 抖音 男性衣服
              襯衫，以便我們幫你產生相關的社群標籤
            </p>
            <div className="flex justify-end py-5">
              <div className="flex items-center gap-5">
                <Button className="bg-teal-500 text-white hover:bg-teal-400">
                  查詢
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AIInputSection;
