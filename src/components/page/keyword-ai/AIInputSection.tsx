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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { fetchOpenAICompletion } from "@/utils/openai";

//各個Select component的選項
const category_data: Array<string> = [
  "家具",
  "電子",
  "飲食",
  "美妝",
  "保健食品",
];

const formSchema = z.object({
  category: z.string().nonempty({ message: "商品分類不能為空值" }),
  keyword: z.string(),
});

type AIInputSectionProps = {
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AIInputSection = ({ setResult, setIsLoading }: AIInputSectionProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      keyword: "",
    },
  });

  async function generateText({
    category,
    keyword,
  }: {
    category: string;
    keyword: string;
  }) {
    try {
      setIsLoading(true);
      const prompt = `請幫我生成10組有關 ${category}分類 ${keyword} 的google關鍵字`;
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
    console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
    generateText(values);
  }

  return (
    //這裡我們使用了Shadcn/ui的Form與Select，詳細資訊請看：https://ui.shadcn.com/docs/components/form
    <>
      <Card className="m-1 rounded-md border border-teal-500 p-4 md:m-8">
        <CardHeader>
          <CardTitle>關鍵字AI搜索</CardTitle>
          <CardDescription>請輸入相關變數取得關鍵字</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full items-center gap-4">
                <div className="flex flex-col gap-2 text-black md:flex-row">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-teal-700">
                          商品分類:
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpOutlineIcon
                                  sx={{ color: "orange", fontSize: "18px" }}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>請選擇商品分類以便查詢關聯字</p>
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
        </CardContent>
      </Card>
    </>
  );
};

export default AIInputSection;
