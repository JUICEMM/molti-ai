import { DataTable } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/DataTable";
import { TwitchTopGamesColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopGamesColumns";
import { TwitchTopStreamsColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopStreamsColumns";
import { Button } from "@/components/ui/button";
import DataRowSelectionContextProvider from "@/context/page/hotspot/DataRowSelectionContext";
import useTwitch from "@/hooks/useTwitch";
import {
  filterGamesDataFunction,
  filterStreamsDataFunction,
} from "@/lib/page/keyword-ai/twitch/filterFn";
import { useState } from "react";

type TwitchStreamConfig = {
  category: string;
  api: string; // Assuming api is a string type
  getFilteredData: (data: any) => any; // Assuming filterStreamsDataFunction returns any type
  filteredColumns: [];
};

const TestPage = () => {
  const [TwitchFilterCategory, setTwitchFilterCategory] = useState<
    TwitchStreamConfig | {}
  >({});

  const { data, isLoading } = useTwitch(
    (TwitchFilterCategory as TwitchStreamConfig).api
  );


  const a = [
    {
      category: "streamers",
      api: "https://api.twitch.tv/helix/streams",
      getFilteredData: (data: any) => filterStreamsDataFunction(data),

      filteredColumns: TwitchTopStreamsColumns,
    },
    {
      category: "games",
      api: "https://api.twitch.tv/helix/games/top?first=10",
      getFilteredData: (data: any) => filterGamesDataFunction(data),
      filteredColumns: TwitchTopGamesColumns,
    },
  ];

  console.log("TwitchFilterCategory", TwitchFilterCategory);
  return (
    <DataRowSelectionContextProvider>
      <div className="flex flex-col gap-5 p-4 bg-gray-200">
        <div className="flex flex-col gap-2 bg-white p-4 rounded-md">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() =>
                setTwitchFilterCategory(
                  [...a].find((item) => item.category === "games") || {}
                )
              }
            >
              Twitch熱門遊戲
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                setTwitchFilterCategory(
                  [...a].find((item) => item.category === "streamers") || {}
                )
              }
            >
              Twitch熱門直播
            </Button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md h-[550px] overflow-scroll">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              Loading...
            </div>
          ) : (
            <DataTable
              columns={
                (TwitchFilterCategory as TwitchStreamConfig).filteredColumns ||
                []
              }
              data={
                typeof (TwitchFilterCategory as TwitchStreamConfig)
                  .getFilteredData === "function"
                  ? (
                      TwitchFilterCategory as TwitchStreamConfig
                    ).getFilteredData(data) || []
                  : []
              }
            />
          )}
        </div>
      </div>
    </DataRowSelectionContextProvider>
  );
};

export default TestPage;
