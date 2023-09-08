//*DataTable
export type DataAnalysisColumnsTypes = {
  id: string;
  關聯字: string;
  商品分類: string;
  平均日搜索量: number;
  平均月搜索增長率: number;
  ppc競價: number;
  產品平均價格: number;
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
