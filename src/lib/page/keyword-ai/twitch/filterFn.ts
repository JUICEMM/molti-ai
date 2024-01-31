export interface TwitchStream {
  game_name: string;
  user_name: string;
  viewer_count: string;
  title: string;
  tags: string;
  language: string;
  [key: string]: any; // Index signature for additional properties
}
export interface TwitchGames {
  box_art_url: string;
  name: string;
}

export const filterStreamsDataFunction = (data: any) => {
  const filterData: TwitchStream[] = [];
  for (let i = 0; i < data.length; i++) {
    const dataSchema = data[i];
    const { game_name, user_name, viewer_count, title, tags, language } =
      dataSchema;
    filterData.push({
      game_name,
      user_name,
      viewer_count,
      title,
      tags: !!tags ? tags.join(", ") : [],
      language,
    });
  }
  console.log("filterData", filterData);
  return filterData;
};

export const filterGamesDataFunction = (data: any) => {
  const filterData: TwitchGames[] = [];
  if (data)
    for (let i = 0; i < data.length; i++) {
      const dataSchema = data[i];
      const { box_art_url, name } = dataSchema;
      filterData.push({
        box_art_url: !!box_art_url ? box_art_url.replace("{width}", 900).replace("{height}", 1200) : "",
        name,
      });
    }
  console.log("filterData", filterData);
  return filterData;
};
