import Head from "next/head";
import Navbar from "@/components/global/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CountryCard from "@/components/home/CountryCard";
import japan from "../../public/japan.png";
import taiwan from "../../public/taiwan.png";
import us from "../../public/united-states.png";
import FeatureCard from "@/components/home/FeatureCard";

export default function Home() {
  const countryData = [
    {
      imageUrl: taiwan,
      title: "Taiwan",
      description: [
        { store: "蝦皮", status: true },
        { store: "露天", status: true },
        { store: "Momo", status: false },
        { store: "樂天", status: false },
        { store: "Amazon", status: false },
      ],
    },
    {
      imageUrl: japan,
      title: "Japan",
      description: [ { store: "Amazon", status: true }, { store: "樂天", status: false },],
    },
    {
      imageUrl: us,
      title: "United States",
      description: [ { store: "Amazon", status: true },],
    },
  ];

  const featureData = [
    {
      imageUrl:
        "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/All/e94917b6-8a41-414b-aa53-00e05467eed0/redacted-img-brand-lander-wm-free-trial.jpg",
      title: "關鍵字",
      description:
        "產品關鍵字查詢可精確尋找特定商品的關聯字詞，提供搜索趨勢、PPC競價及特性等資訊，幫助企業家在廣告投放做出明智選擇",
      href: "/keyword",
    },
    {
      imageUrl:
        "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/All/b5c7036b-7b96-40bc-a521-a2c838b6f618/redacted-img-brand-lander-professional-email.jpg",
      title: "kol",
      description:
        "利用關鍵詞查詢高度相關的KOL，幫助企業家查詢有利的代言合作夥伴",
      href: "/kol",
    },
  ];

  return (
    <>
      <Head>
        <title>Molti</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen font-Serif">
        {/* <div className="main">
          <div className="gradient" />
        </div> */}
        {/*Heading section*/}
        <div className="flex h-screen flex-col items-center justify-center gap-5 bg-gradient-to-b from-teal-700 to-teal-500">
          <div className="app py-10 text-5xl text-black">
            <div className="text-center text-5xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-teal-200 to-emerald-300 bg-clip-text">
              Molti分析
            </div>
            <div className="text-center text-2xl md:text-6xl font-bold text-white">
              國內外大型電商網站數據分析
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div>
              <Button variant={"default"} className="text-md">
                Start Your Free Trial
              </Button>
            </div>
            <div>
              <Button variant={"outline"} className="text-md">
                <AnchorLink href="#contact">Contact Us</AnchorLink>
              </Button>
            </div>
          </div>
        </div>
        {/*feature section*/}
        <div className="h-auto md:h-screen bg-white bg-gradient-to-b py-10">
          <div className="mx-auto w-[90%]">
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 md:py-2 text-6xl font-bold text-black">
              <div className="text-center text-4xl md:text-5xl">Molti助您擴展企業規模</div>
              <p className="text-lg">精準分析產品趨勢及關鍵詞</p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:gap-1 md:grid-cols-2">
              {featureData.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        {/*Country section*/}
        <div className="h-auto md:h-screen bg-gradient-to-b from-teal-500 to-teal-600">
          <div className="flex items-center justify-center">
            <div>
              <div className="app py-10 text-5xl text-black">
                <div className="text-center bg-gradient-to-r bg-clip-text text-6xl font-bold text-white">
                  支援3種不同國家
                </div>
                <div className="text-4xl font-bold text-emerald-100">
                  熱門大型電商網站
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-5 p-2">
                  {countryData.map((item, index) => (
                    <CountryCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
