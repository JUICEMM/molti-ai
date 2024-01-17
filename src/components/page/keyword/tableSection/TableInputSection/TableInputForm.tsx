import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//各個Select component的選項

const HOTSPOT_DATA = [
  {
    title: "考拉新媒體導航",
    iframeUrl: "https://www.kaolamedia.com/hot",
  },
  {
    title: "快推易 大數據詞雲",
    iframeUrl: "https://www.kt1.com/",
  },
  {
    title: "梅花網排行",
    iframeUrl: "https://www.meihua.info/top",
  },
  {
    title: "千瓜數據",
    iframeUrl: "https://www.qian-gua.com/rank/fans/",
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
  }

  return (
    //這裡我們使用了Shadcn/ui的Form與Select，詳細資訊請看：https://ui.shadcn.com/docs/components/form
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full items-center gap-4">
          <div className="flex flex-col gap-2 text-black md:flex-row">
            {HOTSPOT_DATA.map((item) => (
              <Button
                key={item.title}
                variant={"outline"}
                onClick={() => setIframeUrl(item.iframeUrl)}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default TableInputForm;
