//*DataTable
export type DataAnalysisColumnsTypes = {
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
export type CountryEcommerceWebsitesDataTypes = {
  [key: string]: Array<string>;
};
//Type of PriceCard component
export type PriceCardDataTypes = {
  title: string;
  price: string;
  features: Array<{ [key: string]: string }>;
};
