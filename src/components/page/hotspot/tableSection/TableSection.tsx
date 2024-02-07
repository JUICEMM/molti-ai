import TableInputSection from "./tableInputSection/TableInputSection";
import TableRenderSection from "./tableRenderSection/TableRenderSection";
import { TwitchTopGamesColumns } from "@/components/page/hotspot/tableSection/tableRenderSection/dataTable/TwitchTopGamesColumns";
import { TwitchTopStreamsColumns } from "@/components/page/hotspot/tableSection/tableRenderSection/dataTable/TwitchTopStreamsColumns";
import useTwitch from "@/hooks/useTwitch";
import {
  filterGamesDataFunction,
  filterStreamsDataFunction,
} from "@/lib/page/hotspot/twitch/filterFn";
import { useState } from "react";

//為了讓切換ApiUrl時能讓data表格的column與data的type能符合，故讓TwitchFilterCategory保持TwitchConfig的type
export type TwitchConfig = {
  category: string;
  api: string;
  getFilteredData: (data: any) => any;
  filteredColumns: [];
};
//目前只有兩個api url, getFilteredData是讓api回傳的data做過濾，只提出需要的部分。filteredColumns是傳入data的表格的column，是符合shadcn/ui的規則
export const twitchCategories = [
  {
    category: "games",
    api: "https://api.twitch.tv/helix/games/top?first=10",
    getFilteredData: (data: any) => filterGamesDataFunction(data),
    filteredColumns: TwitchTopGamesColumns,
  },
  {
    category: "streams",
    api: "https://api.twitch.tv/helix/streams",
    getFilteredData: (data: any) => filterStreamsDataFunction(data),
    filteredColumns: TwitchTopStreamsColumns,
  },
];

const TableSection = () => {
  const [isIframeOpen, setIsIframeOpen] = useState(true); //用來控制出現iframe還是dataTable
  const [iframeUrl, setIframeUrl] = useState("");//用來儲存iframe的url
  const [TwitchFilterCategory, setTwitchFilterCategory] = useState<
    TwitchConfig | {}
  >({});//每次使用者點擊不同的按鈕時，都會改變TwitchFilterCategory的值，讓data表格的column與data的type能符合

  //每次使用者點擊不同的Twitch按鈕時，useTwitch都會針對目前的TwitchFilterCategory裡的api url重新fetch資料
  const { data, isLoading } = useTwitch(
    (TwitchFilterCategory as TwitchConfig).api
  );

  return (
    <>
      <TableInputSection setIframeUrl={setIframeUrl} setTwitchFilterCategory={setTwitchFilterCategory} setIsIframeOpen={setIsIframeOpen} />
      <TableRenderSection iframeUrl={iframeUrl} TwitchFilterCategory={TwitchFilterCategory} data={data} isLoading={isLoading} isframeOpen={isIframeOpen}/>
    </>
  );
};

export default TableSection;
