import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Dispatch, SetStateAction } from "react";

//各個Select component的選項

const HOTSPOT_DATA = [
  {
    title: "即時熱點 考拉新媒體導航",
    iframeUrl: "https://www.kaolamedia.com/hot",
    filter_by: ["即時熱點排行"],
  },
  {
    title: "大數據詞雲 快推易",
    iframeUrl: "https://www.kt1.com/",
    filter_by: ["大數據詞雲"],
  },
  {
    title: "熱門影片 梅花網排行",
    iframeUrl: "https://www.meihua.info/top",
    filter_by: ["熱門影片排行"],
  },
  {
    title: "熱門創作者 千瓜數據",
    iframeUrl: "https://www.qian-gua.com/rank/fans/",
    filter_by: ["熱門創作者排行", "小紅書"],
  },
  {
    title: "Tiktok熱門歌曲 Countik",
    iframeUrl: "https://countik.com/zh/popular/songs",
    filter_by: ["熱門歌曲排行", "Tiktok"],
  },
  {
    title: "Tiktok熱門創作者 Countik",
    iframeUrl: "https://countik.com/zh/popular/creators",
    filter_by: ["熱門創作者排行", "Tiktok"],
  },
  {
    title: "Tiktok熱門話題 Countik",
    iframeUrl: "https://countik.com/zh/popular/topics",
    filter_by: ["熱門話題排行", "Tiktok"],
  },
  {
    title: "Instagram熱門創作者 SocialBook",
    iframeUrl:
      "https://socialbook.io/instagram-channel-rank/top-100-instagrammers-from-united-states",
    filter_by: ["熱門創作者排行", "Instagram"],
  },
  {
    title: "Youtube熱門頻道 SocialBook",
    iframeUrl:
      "https://socialbook.io/youtube-channel-rank/top-100-youtubers?sort=followers",
    filter_by: ["熱門創作者排行", "Youtube"],
  },
  {
    title: "滴答狗 Tiktok",
    iframeUrl: "https://didadog.com/libraryProduct/productHotList",
    filter_by: ["Tiktok"],
  },
  {
    title: "新紅 小紅書",
    iframeUrl: "https://xh.newrank.cn/?source=10000&l=t_ys_sjfu_dspsj_xh",
    filter_by: ["小紅書"],
  },
];

const HOT_FILTER_DATA = [
  {
    keys: [
      {
        key: "即時熱點排行",
      },
      {
        key: "熱門影片排行",
      },
      {
        key: "熱門歌曲排行",
      },
      {
        key: "熱門創作者排行",
      },
      {
        key: "熱門話題排行",
      },
    ],
  },
];
const SOCIALMEDIA_FILTER_DATA = [
  {
    keys: [
      {
        key: "Tiktok",
      },
      {
        key: "Instagram",
      },
      {
        key: "Youtube",
      },
      {
        key: "小紅書",
      },
    ],
  },
];
const TOOL_FILTER_DATA = [
  {
    keys: [
      {
        key: "大數據詞雲",
      },
    ],
  },
];
type TableInputSectionProps = {
  setIframeUrl: Dispatch<SetStateAction<string>>;
};

const TableInputForm = ({ setIframeUrl }: TableInputSectionProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Tabs defaultValue="即時熱點排行">
        <div className="overflow-x-scroll">
          <TabsList>
            {HOT_FILTER_DATA.map((keysObect) =>
              keysObect.keys.map((key) => (
                <TabsTrigger value={key.key} key={key.key}>
                  {key.key}
                </TabsTrigger>
              ))
            )}
          </TabsList>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {HOTSPOT_DATA.map((data) => (
            <TabsContent
              value={data.filter_by.find((key) => key.includes("熱")) || ""}
              key={data.title}
            >
              <Button
                variant={"outline"}
                onClick={() => setIframeUrl(data.iframeUrl)}
              >
                {data.title}
              </Button>
            </TabsContent>
          ))}
        </div>
      </Tabs>

      <Tabs defaultValue="Tiktok" className="w-auto">
        <div className="overflow-x-scroll">
          <TabsList>
            {SOCIALMEDIA_FILTER_DATA.map((keysObect) =>
              keysObect.keys.map((key) => (
                <TabsTrigger value={key.key} key={key.key}>
                  {key.key}
                </TabsTrigger>
              ))
            )}
          </TabsList>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {HOTSPOT_DATA.map((data) => (
            <TabsContent
              value={data.filter_by.find((key) => !key.includes("熱")) || ""}
              key={data.title}
            >
              <Button
                variant={"outline"}
                onClick={() => setIframeUrl(data.iframeUrl)}
              >
                {data.title}
              </Button>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <Tabs defaultValue="大數據詞雲" className="w-auto">
        <div className="overflow-x-scroll">
          <TabsList>
            {TOOL_FILTER_DATA.map((keysObect) =>
              keysObect.keys.map((key) => (
                <TabsTrigger value={key.key} key={key.key}>
                  {key.key}
                </TabsTrigger>
              ))
            )}
          </TabsList>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {HOTSPOT_DATA.map((data) => (
            <TabsContent
              value={data.filter_by.find((key) => !key.includes("熱")) || ""}
              key={data.title}
            >
              <Button
                variant={"outline"}
                onClick={() => setIframeUrl(data.iframeUrl)}
              >
                {data.title}
              </Button>
            </TabsContent>
          ))}
        </div>
      </Tabs>

      <p className="text-xs text-gray-500 mt-5">
        Moltiai為跨境賣家提供的專業TikTok一站式的營運必備工具箱，專為TikTok經營者以及跨境出海賣家，提供TikTok營運、學習教學課程、工具、直播、變現、數據分析、廣告投放、社媒
        行銷等一站式的TikTok營運必備工具，讓跨國出海更簡單、更方便！
        Moltiai網站上的服務皆為第三方提供，與Moltiai無關。
        請使用者注意識別服務，避免上當！
      </p>
    </div>
  );
};

export default TableInputForm;
