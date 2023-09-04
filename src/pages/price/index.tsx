import Navbar from "@/components/global/Navbars/Navbar";
import PriceCard from "@/components/page/price/PriceCard";
import { motion } from "framer-motion";
import type { PriceCardDataTypes } from "types/dataType";


const price_card_data: PriceCardDataTypes[] = [
  {
    title: "免費版",
    price: "0",
    features: [
      {
        feature_name: "可觀看資料排名",
        feature_value: "80~100",
      },
      {
        feature_name: "可選擇國家",
        feature_value: "台灣",
      },
      {
        feature_name: "可觀看趨勢圖表",
        feature_value: "無",
      },
      {
        feature_name: "KOL功能",
        feature_value: "youtube",
      },
    ],
  },
  {
    title: "標準版",
    price: "699",
    features: [
      {
        feature_name: "可觀看資料排名",
        feature_value: "40~100",
      },
      {
        feature_name: "可選擇國家",
        feature_value: "台灣,日本,美國",
      },
      {
        feature_name: "可觀看趨勢圖表",
        feature_value: "基礎圖表",
      },
      {
        feature_name: "KOL功能",
        feature_value: "無限制",
      },
    ],
  },
  {
    title: "進階版",
    price: "999",
    features: [
      {
        feature_name: "可觀看資料排名",
        feature_value: "1~100",
      },
      {
        feature_name: "可選擇國家",
        feature_value: "無限制",
      },
      {
        feature_name: "可觀看趨勢圖表",
        feature_value: "進階圖表",
      },
      {
        feature_name: "KOL功能",
        feature_value: "無限制",
      },
    ],
  },
  {
    title: "專業版",
    price: "1299",
    features: [
      {
        feature_name: "可觀看資料排名",
        feature_value: "無限制",
      },
      {
        feature_name: "可選擇國家",
        feature_value: "無限制",
      },
      {
        feature_name: "可觀看趨勢圖表",
        feature_value: "無限制",
      },
      {
        feature_name: "KOL功能",
        feature_value: "無限制",
      },
    ],
  },
];

const index = () => {
  return (
    <div>
      <Navbar />
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
          <div className="flex flex-col gap-8 px-5 py-2 md:grid md:grid-cols-2 lg:grid-cols-4">
            {price_card_data.map((card, index) => (
              <PriceCard key={index} {...card} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default index;
