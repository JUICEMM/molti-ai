import TableInputSection from "./TableInputSection/TableInputSection";
import TableRenderSection from "./TableRenderSection/TableRenderSection";
import { TwitchTopGamesColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopGamesColumns";
import { TwitchTopStreamsColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopStreamsColumns";
import useTwitch from "@/hooks/useTwitch";
import {
  filterGamesDataFunction,
  filterStreamsDataFunction,
} from "@/lib/page/keyword-ai/twitch/filterFn";
import { useState } from "react";

export type TwitchConfig = {
  category: string;
  api: string; // Assuming api is a string type
  getFilteredData: (data: any) => any; // Assuming filterStreamsDataFunction returns any type
  filteredColumns: [];
};
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
  const [isIframeOpen, setIsIframeOpen] = useState(false);

  const [iframeUrl, setIframeUrl] = useState("");
  const [TwitchFilterCategory, setTwitchFilterCategory] = useState<
    TwitchConfig | {}
  >({});

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
