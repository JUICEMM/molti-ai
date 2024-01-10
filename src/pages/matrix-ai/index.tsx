import martixai from "../../../public/矩陣系統截圖.png";
import Navbar from "@/components/global/Navbars/Navbar";
import FeatureCard from "@/components/page/home/FeatureCard";
import PriceCard from "@/components/page/price/PriceCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { motion } from "framer-motion";
import Image from "next/image";
import type { PriceCardDataTypes } from "types/dataType";

const price_card_data: Array<PriceCardDataTypes> = [
  // {
  //   title: "免費版",
  //   price: "0",
  //   features: [
  //     {
  //       feature_name: "關鍵詞功能",
  //       feature_value: "有",
  //     },
  //     {
  //       feature_name: "關鍵詞AI功能",
  //       feature_value: "有",
  //     },
  //     {
  //       feature_name: "矩陣AI系統",
  //       feature_value: "無",
  //     },
  //     {
  //       feature_name: "影片服務",
  //       feature_value: "無",
  //     },
  //   ],
  // },
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
const featureData = [
  {
    icon: (
      <PsychologyOutlinedIcon sx={{ color: "green", fontSize: "3.2rem" }} />
    ),
    title: "生產效率極大化",
    description: "透過AI幫我們製造短影音省時間成本",
  },
  {
    icon: <UpdateOutlinedIcon sx={{ color: "#4169E1", fontSize: "3.2rem" }} />,
    title: "方便管理",
    description: "優質平台，方便管理你的帳號及影片",
  },
  {
    icon: (
      <QueryStatsOutlinedIcon sx={{ color: "#FF8C00", fontSize: "3.2rem" }} />
    ),
    title: "提升曝光度",
    description: "跨平台的關鍵詞佈局，提升企業及產品曝光",
  },
];

export default function MatrixAIPage() {
  return (
    <main>
      <Navbar />

      {/*Header*/}
      <section className="w-full h-screen bg-blue-100 bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row lg:gap-6 items-center w-[70%]">
            <div className="flex flex-col items-center gap-3 basis-1/2">
              <h1 className="text-bold text-3xl">
                省錢、有效的24H無人直播 致力提供最輕鬆的直播服務
              </h1>
              <div className="text-lg">
                VMIBO威米播APP-專為台灣青年經營抖音與快手直播應用場景設計開發，
                讓你不用訓練主播、剪輯短影音與添購直播設備，你只需輸入語音
                就能讓你實現24H小時多場景的無人直播，並創造流量。
              </div>
              <div className="flex items-center gap-3">
                <Button variant={"outline"}>查看方案</Button>
                <Button>立即試用</Button>
              </div>
            </div>
            <div className="basis-1/2 hidden lg:block">
              <div className="w-[450px]">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={martixai}
                    alt="matrix-ai"
                    fill
                    className="rounded-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*介紹*/}
      <section className="my-10">
        <h2 className="text-center text-3xl font-bold py-10">主要特色</h2>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row lg:gap-6 items-center w-[70%] mx-auto">
            <div className="flex flex-col items-center gap-3 basis-1/2">
              <h1 className="text-bold text-3xl">
                省錢、有效的24H無人直播 致力提供最輕鬆的直播服務
              </h1>
              <div className="text-lg">
                VMIBO威米播APP-專為台灣青年經營抖音與快手直播應用場景設計開發，
                讓你不用訓練主播、剪輯短影音與添購直播設備，你只需輸入語音
                就能讓你實現24H小時多場景的無人直播，並創造流量。
              </div>
              <div className="flex items-center gap-3">
                <Button variant={"outline"}>查看方案</Button>
                <Button>立即試用</Button>
              </div>
            </div>
            <div className="basis-1/2 hidden lg:block">
              <div className="w-[450px]">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={martixai}
                    alt="matrix-ai"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse lg:gap-6 items-center w-[70%] mx-auto">
            <div className="flex flex-col items-center gap-3 basis-1/2">
              <h1 className="text-bold text-3xl">
                省錢、有效的24H無人直播 致力提供最輕鬆的直播服務
              </h1>
              <div className="text-lg">
                VMIBO威米播APP-專為台灣青年經營抖音與快手直播應用場景設計開發，
                讓你不用訓練主播、剪輯短影音與添購直播設備，你只需輸入語音
                就能讓你實現24H小時多場景的無人直播，並創造流量。
              </div>
              <div className="flex items-center gap-3">
                <Button variant={"outline"}>查看方案</Button>
                <Button>立即試用</Button>
              </div>
            </div>
            <div className="basis-1/2 hidden lg:block">
              <div className="w-[450px]">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={martixai}
                    alt="matrix-ai"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-6 items-center w-[70%] mx-auto">
            <div className="flex flex-col items-center gap-3 basis-1/2">
              <h1 className="text-bold text-3xl">
                省錢、有效的24H無人直播 致力提供最輕鬆的直播服務
              </h1>
              <div className="text-lg">
                VMIBO威米播APP-專為台灣青年經營抖音與快手直播應用場景設計開發，
                讓你不用訓練主播、剪輯短影音與添購直播設備，你只需輸入語音
                就能讓你實現24H小時多場景的無人直播，並創造流量。
              </div>
              <div className="flex items-center gap-3">
                <Button variant={"outline"}>查看方案</Button>
                <Button>立即試用</Button>
              </div>
            </div>
            <div className="basis-1/2 hidden lg:block">
              <div className="w-[450px]">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={martixai}
                    alt="matrix-ai"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*好處*/}
      <section className="bg-blue-50">
        <h3 className="py-10 text-center font-bold text-3xl">
          為什麼你一定要用矩陣AI?
        </h3>
        <div className="w-[70%] mx-auto">
          <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3">
            {featureData.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute top-0 -z-[999] h-[600px] w-full rounded-b-full bg-gradient-to-b from-blue-50 via-blue-400 to-blue-600" />
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
            <p className="text-white">立即選擇方案，開始您的短影音之旅</p>
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
      </section>
    </main>
  );
}
