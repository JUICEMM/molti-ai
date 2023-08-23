
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
export type DataAnalysis = {
    id: string
    keyword: string
    category: string
    searchAveragePerDay: string
    searchAveragePerMonthGrowthRate: string
    ppc: string
    productAveragePrice: string
  }


export type CountryWebsites = {
    [key: string]: string[];
  };