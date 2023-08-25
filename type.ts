//DataTable
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
export type DataAnalysis = {
  id: string;
  keyword: string;
  category: string;
  searchAveragePerDay: string;
  searchAveragePerMonthGrowthRate: string;
  ppc: string;
  productAveragePrice: string;
};

//*Data
//Type of country e-commerce website data in KeywordInputSection
export type CountryWebsites = {
  [key: string]: string[];
};

//*Component
//Type of PriceCard component
export type PriceCard = {
  title: string;
  price: string;
  features: { [key: string]: string }[];
};
