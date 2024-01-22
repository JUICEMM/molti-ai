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
    title: "Tiktok",
    iframeUrl: "https://didadog.com/libraryProduct/productHotList",
  },
  {
    title: "小紅書",
    iframeUrl: "https://xh.newrank.cn/?source=10000&l=t_ys_sjfu_dspsj_xh",
  },
];

type TableInputSectionProps = {
  setIframeUrl: Dispatch<SetStateAction<string>>;
};

const TableInputForm = ({ setIframeUrl }: TableInputSectionProps) => {
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
      <p className="text-xs text-gray-500 mt-5">Moltiai為跨境賣家提供的專業TikTok一站式的營運必備工具箱，專為TikTok經營者以及跨境出海賣家，提供TikTok營運、學習教學課程、工具、直播、變現、數據分析、廣告投放、社媒 行銷等一站式的TikTok營運必備工具，讓跨國出海更簡單、更方便！ Moltiai網站上的服務皆為第三方提供，與Moltiai無關。 請使用者注意識別服務，避免上當！</p>
    </div>
  );
};

export default TableInputForm;
