import TableInputSection from "./TableInputSection/TableInputSection";
import TableRenderSection from "./TableRenderSection/TableRenderSection";
import { DataTable } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/DataTable";
import { TwitchTopGamesColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopGamesColumns";
import { TwitchTopStreamsColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopStreamsColumns";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataRowSelectionContextProvider from "@/context/page/hotspot/DataRowSelectionContext";
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
  console.log("rendering...")
  const [iframeUrl, setIframeUrl] = useState("");

  const [TwitchFilterCategory, setTwitchFilterCategory] = useState<
    TwitchConfig | {}
  >({});

  const { data, isLoading } = useTwitch(
    (TwitchFilterCategory as TwitchConfig).api
  );
  console.log("TwitchFilterCategory = ", TwitchFilterCategory,"TwitchData = ",data)



  return (
    <>
      <TableInputSection setIframeUrl={setIframeUrl} setTwitchFilterCategory={setTwitchFilterCategory} />
      <TableRenderSection iframeUrl={iframeUrl} data={data} isLoading={isLoading} TwitchFilterCategory={TwitchFilterCategory} />
    </>
  );
};

export default TableSection;
