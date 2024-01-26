//*DataTable
export type HotSpotDataColumnsTypes_TwitchStreams = {
  user_name: string;
  game_name: string;
  title: string;
  viewer_count: string;
  language: string;
  tags: string;
};
export type HotSpotDataColumnsTypes_TwitchGames = {
  name: string;
  box_art_url: string;
};

// hotspot Data type
// Type of country e-commerce website data in KeywordInputSection
export type CountryHotspotDataTypes = {
  [key: string]: Array<string>;
};
//Type of PriceCard component
export type PriceCardDataTypes = {
  title: string;
  price: string;
  features: Array<{ [key: string]: string }>;
  href?: string;
};
