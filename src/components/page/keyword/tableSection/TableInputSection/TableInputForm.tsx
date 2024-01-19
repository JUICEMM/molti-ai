import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import type { Dispatch, SetStateAction } from "react";

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
  {
    title: "Countik Tiktok熱門歌曲",
    iframeUrl: "https://countik.com/zh/popular/songs",
  },
  {
    title: "Countik Tiktok熱門創作者",
    iframeUrl: "https://countik.com/zh/popular/creators",
  },
  {
    title: "Countik Tiktok熱門話題",
    iframeUrl: "https://countik.com/zh/popular/topics",
  },
  {
    title: "SocialBook Instagram熱門創作家",
    iframeUrl:
      "https://socialbook.io/instagram-channel-rank/top-100-instagrammers-from-united-states",
  },
  {
    title: "SocialBook Youtube熱門頻道",
    iframeUrl:
      "https://socialbook.io/youtube-channel-rank/top-100-youtubers?sort=followers",
  },
  {
    title: "FastMoss Tiktok熱門直播",
    iframeUrl: "https://www.fastmoss.com/live/search",
  },
  {
    title: "FastMoss Tiktok熱門商品",
    iframeUrl: "https://www.fastmoss.com/e-commerce/search",
  },
  {
    title: "FastMoss Tiktok熱門店鋪",
    iframeUrl: "https://www.fastmoss.com/shop-marketing/search",
  },
  {
    title: "FastMoss Tiktok熱門創作家",
    iframeUrl: "https://www.fastmoss.com/influencer/search",
  },
  {
    title: "FastMoss Tiktok熱門廣告",
    iframeUrl: "https://www.fastmoss.com/marketing/search",
  },
];

type TableInputSectionProps = {
  setIframeUrl: Dispatch<SetStateAction<string>>;
};

const TableInputForm = ({ setIframeUrl }: TableInputSectionProps) => {
  const router = useRouter();
  return (
    <div className="w-full items-center gap-4">
      <div className="flex flex-col gap-2 text-black md:flex-row md:flex-wrap">
        {HOTSPOT_DATA.map((item) => {
          if (item.title.includes("FastMoss"))
            return (
              <Button key={item.title} variant={"outline"}>
                <a href={item.iframeUrl} target="_blank">
                  {item.title}
                </a>
              </Button>
            );

          return (
            <Button
              key={item.title}
              variant={"outline"}
              onClick={() => setIframeUrl(item.iframeUrl)}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TableInputForm;
