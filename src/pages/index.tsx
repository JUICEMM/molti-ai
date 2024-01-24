import hotspot from "../../public/hotspot.png";
import photograph from "../../public/攝影.png";
import moltiai from "../../public/矩陣系統截圖.png";
import keywordai from "../../public/關鍵字AI截圖.png";
import FeatureCard from "@/components/page/home/FeatureCard";
import FunctionCard from "@/components/page/home/FunctionCard";
import { Button } from "@/components/ui/button";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
        "利用AI取得關聯度最高的前30關鍵字",
      href: "/keyword-ai",
      pay: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Molti</title>
        <meta
          name="description"
          content="Moltiai help you create short videos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-dvh">
        <div className="main">
          <div className="gradient" />
        </div>
        {/*Heading section */}
        <div className="relative h-[600px] border-b-2 border-neutral-300 px-10 md:px-20 gap-5 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="md:flex md:items-center md:gap-10 pt-[150px] text-5xl text-black"
          >
            <div className="md:basis-1/2 basis-auto flex flex-col gap-5">
              <div className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-center md:text-start text-4xl font-bold text-transparent md:text-6xl">
                <span className="text-6xl">Molti</span><br></br>
                短影音服務
              </div>
              <div className="text-center md:text-start text-sm text-white lg:text-lg">
                Molti讓影片剪輯更加容易，也更加專業 一次搞定
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/matrix-ai">
                  <Button
                    className="bg-[#4169E1] m:w-30 px-8 md:px-16 py-6 md:py-8 text-xl"
                    variant={"default"}
                  >
                    立即使用
                  </Button>
                </Link>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="relative md:basis-1/2 hidden md:flex md:justify-center"
            >
              <Image
                src={
                  "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
                width={500}
                height={500}
                className="object-cover rounded-3xl"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex justify-center mt-32 md:mt-12"
          >
            <AnchorLink
              href="#function"
              onClick={() => {}}
              className="flex flex-col items-center"
            >
              <span className="text-white">瞭解更多</span>
              <KeyboardArrowDownRoundedIcon
                sx={{ color: "snow", fontSize: "2.4rem" }}
              />
            </AnchorLink>
          </motion.div>
        </div>

        {/*function section*/}
        <div
          id="function"
          className="py-16 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700"
        >
          <div className="py-12 text-center">
            <motion.p
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              服務內容
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.25 }}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="text-sm md:text-lg text-white mt-5"
            >
              我們提供多種服務選擇供你們選擇
            </motion.p>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
            {functionData.map((item, index) => (
              <FunctionCard key={index} {...item} />
            ))}
          </div>
        </div>
        {/*feature section*/}
        <div className="flex h-auto items-center bg-white bg-gradient-to-b py-10">
          <div className="mx-auto w-[90%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.05 }}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex flex-col items-center justify-center gap-4 px-4 py-6 text-6xl font-bold text-black md:py-2"
            >
              <div className="text-center text-3xl md:text-5xl mt-5 mb-8">
                Molti助您擴展企業品牌
              </div>
            </motion.div>
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
          </div>
        </div>
      </main>
    </>
  );
}
