import hotspot from "../../public/hotspot.png";
import moltiai_banner_img from "../../public/moltiai-banner-img.png";
import photograph from "../../public/攝影.png";
import moltiai from "../../public/矩陣系統截圖.png";
import keywordai from "../../public/關鍵字AI截圖.png";
import Navbar from "@/components/global/Navbars/Navbar";
import FeatureCard from "@/components/page/home/FeatureCard";
import FunctionCard from "@/components/page/home/FunctionCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const featureData = [
    {
      icon: (
        <UpdateOutlinedIcon sx={{ color: "#4169E1", fontSize: "3.2rem" }} />
      ),
      title: "快速、效率",
      description: "我們主打有效率利用AI強大的功能快速解決問題",
    },
    {
      icon: <SupportAgentIcon sx={{ color: "#FF8C00", fontSize: "3.2rem" }} />,
      title: "專業服務",
      description:
        "並提供專業拍攝影片服務，自從IP打造到腳本規劃，一站式服務讓您的品牌擁有最完整短影音策略方案！",
    },
  ];

  const functionData = [
    {
      imageUrl: hotspot,
      title: "熱點搜索工具",
      description: "利用熱點工具幫助您在製作短影音",
      href: "/hotspot",
      pay: false,
    },
    {
      imageUrl: keywordai,
      title: "AI產生關鍵字排序",
      description:
        "利利用AI取得關聯度最高的前30關鍵字，幫助企業在優化搜尋上做出明智選擇",
      href: "/keyword-ai",
      pay: false,
    },
    {
      imageUrl: moltiai,
      title: "矩陣系統",
      description: "矩陣系統能幫助您有效製作短影音，增加影片產出效率",
      href: "/matrix-ai",
      pay: true,
    },
    {
      imageUrl: photograph,
      title: "影音拍攝服務",
      description: "我們提供專業攝影師的服務，確保您影片的產出品質",
      href: "/photoservice",
      pay: true,
    },
  ];
  //   async function fetchHotlistData() {
  //     const url = "https://v.api.aa1.cn/api/douyin-hot/index.php?aa1=hot";

  //     try {
  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const dataText = await response.json();

  //       // 在這裡處理獲得的資料
  //     } catch (error) {
  //       console.error("Error fetching hotlist data:", error);
  //       // 在這裡處理錯誤
  //     }
  //   }

  //   // 使用範例
  //   fetchHotlistData();
  // }, []);

  return (
    <>
      <Head>
        <title>Molti</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen font-Serif">
        <div className="main">
          <div className="gradient" />
        </div>
        {/*Heading section */}
        <div className="flex h-[400px] items-center justify-center gap-5 bg-gradient-to-b from-sky-800 via-sky-600 to-sky-500">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex items-center pt-20 text-5xl text-black"
            >
              <div className="relative basis-1/2 hidden md:block">
                <div className="w-[400px] absolute top-[-70px] left-16">
                  <Image
                    src={moltiai_banner_img}
                    alt="logo"
                    width={400}
                    priority
                    className=""
                  />
                </div>
              </div>
              <div className="basis-1/2 flex flex-col gap-5">
                <div className="bg-gradient-to-r from-teal-200 to-emerald-300 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
                  Molti矩陣系統
                </div>
                <div className="text-center text-xl font-bold text-white md:text-2xl">
                  採用SaaS模式，無需部署，快捷方便。人工智能技術，解放人力。覆蓋輿情工作各個環節。
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/*feature section*/}
        <div className="py-16">
          <div className="py-12 text-center">
            <p className="font-serif text-5xl font-bold">四大優勢</p>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
            {functionData.map((item, index) => (
              <FunctionCard key={index} {...item} />
            ))}
          </div>
        </div>
        {/*function section*/}
        <div className="flex h-auto items-center bg-white bg-gradient-to-b py-10">
          <div className="mx-auto w-[90%]">
            <div className="grid grid-cols-1 justify-items-center gap-3 md:grid-cols-2 md:gap-1">
              {featureData.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 text-6xl font-bold text-black md:py-2">
              <div className="text-center text-4xl md:text-5xl">
                Molti助您擴展企業品牌
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
