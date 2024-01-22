import * as React from "react"
import PriceCard from "@/components/price/PriceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import type { PriceCardDataTypes } from "types/dataType";

const price_card_data: Array<PriceCardDataTypes> = [
  {
    title: "免費版",
    price: "0",
    features: [
      {
        feature_name: "關鍵詞功能",
        feature_value: "有",
      },
      {
        feature_name: "關鍵詞AI功能",
        feature_value: "有",
      },
      {
        feature_name: "矩陣AI系統",
        feature_value: "無",
      },
      {
        feature_name: "影片服務",
        feature_value: "無",
      },
    ],
  },
  {
    title: "1個月",
    price: "880",
    features: [
      {
        feature_name: "關鍵詞功能",
        feature_value: "有",
      },
      {
        feature_name: "關鍵詞AI功能",
        feature_value: "有",
      },
      {
        feature_name: "矩陣AI系統",
        feature_value: "有 時效1個月",
      },
      {
        feature_name: "影片服務",
        feature_value: "有 時效1個月",
      },
    ],
    href: "https://cart.cashier.ecpay.com.tw/qp/tkH6",
  },
  {
    title: "3個月",
    price: "2640",
    features: [
      {
        feature_name: "關鍵詞功能",
        feature_value: "有",
      },
      {
        feature_name: "關鍵詞AI功能",
        feature_value: "有",
      },
      {
        feature_name: "矩陣AI系統",
        feature_value: "有 時效3個月",
      },
      {
        feature_name: "影片服務",
        feature_value: "有 時效3個月",
      },
    ],
    href: "https://cart.cashier.ecpay.com.tw/qp/tkG6",
  },
  {
    title: "6個月",
    price: "5280",
    features: [
      {
        feature_name: "關鍵詞功能",
        feature_value: "有",
      },
      {
        feature_name: "關鍵詞AI功能",
        feature_value: "有",
      },
      {
        feature_name: "矩陣AI系統",
        feature_value: "有 時效6個月",
      },
      {
        feature_name: "影片服務",
        feature_value: "有 時效6個月",
      },
    ],
    href: "https://cart.cashier.ecpay.com.tw/qp/tkF4",
  },
  {
    title: "12個月",
    price: "10560",
    features: [
      {
        feature_name: "關鍵詞功能",
        feature_value: "有",
      },
      {
        feature_name: "關鍵詞AI功能",
        feature_value: "有",
      },
      {
        feature_name: "矩陣AI系統",
        feature_value: "有 時效12個月",
      },
      {
        feature_name: "影片服務",
        feature_value: "有 時效12個月",
      },
    ],
    href: "https://cart.cashier.ecpay.com.tw/qp/tkA3",
  },
];

const PricePage = () => {
  return (
    <div>
      <div className="absolute top-0 -z-[999] h-[600px] w-full rounded-b-full bg-gradient-to-b from-teal-600 via-teal-500 to-teal-400" />
      <div className="min-h-screen gap-10 pt-[73px] font-serif text-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="relative flex flex-col items-center justify-center gap-5 py-[100px]"
        >
          <h1 className="text-4xl font-bold text-white md:text-7xl">
            請選擇您的方案
          </h1>
          <p className="text-white">支持3大站點: 台灣、日本、美國</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="flex items-center justify-center py-10"
        >
          {/* <div className="flex flex-col gap-8 px-5 py-2 md:grid md:grid-cols-3 lg:grid-cols-5">
            {price_card_data.map((card, index) => (
              <PriceCard key={index} {...card} />
            ))}
          </div> */}
          <Carousel className="w-full flex justify-center items-center">
            <CarouselContent className="-ml-1 max-w-[2/3]">
              {price_card_data.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <PriceCard key={index} {...card} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5" />
            <CarouselNext className="absolute right-5" />
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default PricePage;
