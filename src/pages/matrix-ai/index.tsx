import moltiai_banner_img from "../../../public/moltiai-banner-img.png";
import white_bg from "../../../public/white_bg.jpg";
import FeatureCard from "@/components/page/home/FeatureCard";
import MainFeatureCard from "@/components/page/matrix-ai/MainFeatureCard";
import ProblemCard from "@/components/page/matrix-ai/ProblemCard";
import PriceCard from "@/components/price/PriceCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import { motion } from "framer-motion";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
const PROBLEMS_DATA = [
  {
    title: "時間總是覺得不夠嗎？",
    image:
      "https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/web/6afc6661-cd82-42a8-9185-fd257826642c.jpg",
  },
  {
    title: "有素材了，但不知道該怎麼剪輯？",
    image:
      "https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/web/6afc6661-cd82-42a8-9185-fd257826642c.jpg",
  },
  {
    title: "太多帳號要管理，總是手忙腳亂的?",
    image:
      "https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/web/6afc6661-cd82-42a8-9185-fd257826642c.jpg",
  },
];
const MAIN_FEATURE_DATA = [
  {
    title: "支持AI混剪",
    description:
      "AI混剪功能使影片剪輯更加智能化與精準。AI混剪技術讓使用者能夠輕鬆創建流暢且高品質的影片，一天可產出超過1000支影片，提升剪輯效率與成品呈現水平。",
    image:
      "https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/web/6afc6661-cd82-42a8-9185-fd257826642c.jpg",
  },
  {
    title: "一鍵管理",
    description:
      "支援一鍵批量發佈影片、定時發佈，支援多帳號多平台一鍵授權管理，節省時間，提升效率。",
    image:
      "https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/web/5e036aa5-455d-4653-9ddc-0b050c124957.jpg",
  },
  {
    title: "智能回覆",
    description:
      "智能回覆系統具有高度智能化，能快速而準確地回應使用者的需求。透過先進的自然語言處理技術，提供精簡、有效的回覆，使溝通更迅速、方便、快速。",
    image:
      "https://umi-intelligence.oss-cn-shenzhen.aliyuncs.com/web/e98da4f6-4a63-4a7b-9dfb-b69be112b51f.jpg",
  },
];
const SECOND_FEATURE_DATA = [
  {
    icon: <ElectricBoltIcon sx={{ color: "orange", fontSize: "3.2rem" }} />,
    title: "生產效率極大化",
    description: "透過AI幫我們製造短影音省時間成本",
  },
  {
    icon: <ManageAccountsIcon sx={{ color: "brown", fontSize: "3.2rem" }} />,
    title: "方便管理",
    description: "優質平台，方便管理你的帳號及影片",
  },
  {
    icon: <QueryStatsOutlinedIcon sx={{ color: "blue", fontSize: "3.2rem" }} />,
    title: "提升曝光度",
    description: "跨平台的關鍵詞佈局，提升企業及產品曝光",
  },
];

export default function MatrixAIPage() {
  return (
    <main>
      <div className="main">
        <div className="gradient_matrix" />
      </div>
      {/*Header*/}
      <section className="h-[500px] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row lg:gap-12 items-center w-[70%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex flex-col items-start gap-3 basis-1/2"
            >
              <h1 className="bg-gradient-to-r from-neutral-700 via-zinc-800 to-gray-700 bg-clip-text text-6xl font-bold text-transparent md:text-7xl">
                Molti<br></br>
                <span className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 bg-clip-text text-6xl font-bold text-transparent md:text-7xl">矩陣系統</span>
              </h1>
              <div className="text-md text-gray-800">
                省時、省力、有效的AI剪輯軟體，致力提供最輕鬆的剪輯服務
                採用SaaS模式，無需部署，快捷方便。人工智能技術，解放人力。覆蓋輿情工作各個環節。
              </div>
              <div className="flex items-center gap-3">
                <Button variant={"outline"}>
                  <AnchorLink href="#price">查看方案</AnchorLink>
                </Button>
                <Button>立即試用</Button>
              </div>
            </motion.div>
            <div className="basis-1/2 hidden lg:block">
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                className="relative"
              >
                <div className="absolute top-[-70px] left-16 z-10 w-[400px] h-[400px]">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={moltiai_banner_img}
                      alt="logo"
                      fill
                      priority
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/*problems*/}
      <section className="relative">
        <Image
          src={white_bg}
          alt="white_bg"
          className="w-full h-full object-cover absolute z-[-999] opacity-85"
        />
        <div className="py-20 px-10">
          <h2 className="text-center text-2xl md:text-4xl font-bold py-16">
            有面臨這些問題？
          </h2>
          <div className="flex flex-col gap-20">
            {PROBLEMS_DATA.map((problem, index) => (
              <ProblemCard
                title={problem.title}
                image={problem.image}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/*介紹*/}
      <section className="relative py-20">
        <h2 className="text-center text-2xl md:text-4xl font-bold pb-20 pt-8 leading-10">
          矩陣系統<br></br>能給你帶來什麼？
        </h2>
        <div className="flex flex-col gap-20">
          {MAIN_FEATURE_DATA.map((feature, index) => (
            <MainFeatureCard feature={feature} key={index} index={index} />
          ))}
        </div>
      </section>

      {/*好處*/}
      <section className="">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="pt-10 pb-20 text-center font-bold text-2xl md:text-4xl leading-10"
        >
          為什麼<br></br>你一定要用矩陣AI?
        </motion.h3>
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3">
            {SECOND_FEATURE_DATA.map((item, index) => (
              <FeatureCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="relative">
        <div className="absolute top-0 -z-[999] h-[600px] w-full rounded-b-full bg-gradient-to-b from-white via-blue-300 to-blue-400" />
        <div className="h-dvh gap-10 pt-[73px] font-serif text-black">
          <div
            
            className="relative flex flex-col items-center justify-center gap-5 py-[50px]"
          >
            <h1 className="text-4xl font-bold text-black md:text-7xl">
              請選擇您的方案
            </h1>
            <p className="text-black">立即選擇方案，開始您的短影音之旅</p>
          </div>
          <div
            
            className="flex items-center justify-center py-10"
          >
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
          </div>
        </div>
      </section>
    </main>
  );
}
