import instagram_icon from "../../../public/instagram.png";
import tiktok_icon from "../../../public/tiktok.png";
import twitch_icon from "../../../public/twitch.png";
import { DataTable } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/DataTable";
import { TwitchTopGamesColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopGamesColumns";
import { TwitchTopStreamsColumns } from "@/components/page/keyword/tableSection/TableRenderSection/dataTable/TwitchTopStreamsColumns";
import { Button } from "@/components/ui/button";
import DataRowSelectionContextProvider from "@/context/page/hotspot/DataRowSelectionContext";
import useTwitch from "@/hooks/useTwitch";
import Image from "next/image";
import { useState } from "react";

interface TwitchStream {
  game_name: string;
  user_name: string;
  viewer_count: string;
  title: string;
  tags: string;
  language: string;
}
interface TwitchGames {
  box_art_url: string;
  name: string;
}

const TestPage = () => {
  const [TwitchFilterCategory, setTwitchFilterCategory] = useState("");
  const games = "https://api.twitch.tv/helix/games/top?first=10";
  const streamers = "https://api.twitch.tv/helix/streams";

  const { data, isLoading, error } = useTwitch({
    ApiUrl: TwitchFilterCategory,
  });

  const filterStreamsDataFunction = (data: any) => {
    const filterData: TwitchStream[] = [];
    if (data)
      for (let i = 0; i < data.length; i++) {
        const dataSchema = data[i];
        const { game_name, user_name, viewer_count, title, tags, language } =
          dataSchema;
        filterData.push({
          game_name,
          user_name,
          viewer_count,
          title,
          tags: tags.join("、"),
          language,
        });
      }
    console.log(filterData);
    return filterData;
  };
  // const filterStreamsData = filterStreamsDataFunction(data);

  const filterGamesDataFunction = (data: any) => {
    const filterData: TwitchGames[] = [];
    if (data)
      for (let i = 0; i < data.length; i++) {
        const dataSchema = data[i];
        const { box_art_url, name } = dataSchema;
        filterData.push({
          box_art_url: box_art_url
            .replace("{width}", 900)
            .replace("{height}", 1200),
          name,
        });
      }
    console.log(filterData);
    return filterData;
  };
  const filterGamesData = filterGamesDataFunction(data);
  
  return (
    <DataRowSelectionContextProvider>
      <div className="flex flex-col gap-5 p-4 bg-gray-200">
        <div className="flex flex-col gap-2 bg-white p-4 rounded-md">
          <div className="flex items-center gap-2">
            <Image src={twitch_icon} alt="twitch" width={60} />
            <Image src={tiktok_icon} alt="twitch" width={60} />
            <Image src={instagram_icon} alt="twitch" width={60} />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setTwitchFilterCategory(games)}
            >
              Twitch熱門遊戲
            </Button>
            <Button
              variant="outline"
              onClick={() => setTwitchFilterCategory(streamers)}
            >
              Twitch熱門直播
            </Button>
          </div>
        </div>
        <div>
          <DataTable columns={TwitchTopGamesColumns} data={filterGamesData} />
        </div>
      </div>
    </DataRowSelectionContextProvider>
  );
};

export default TestPage;
