// pages/index.js

import Head from "next/head";
import React from "react";

const CONTAIN_DATA = [
  { title: "介紹剪映軟體", content: "我們將介紹剪映軟體的基本資訊和功能。" },
  {
    title: "基本介面與匯入素材",
    content: "了解剪映的基本使用界面，以及如何匯入不同類型的素材。",
  },
  {
    title: "影片分割、合併、剪接",
    content: "掌握影片的基本剪輯技巧，包括分割、合併和剪接。",
  },
  {
    title: "音樂調整與速度調整",
    content: "學習如何調整背景音樂，以及如何改變影片的播放速度。",
  },
  {
    title: "插入字幕卡與動態文字",
    content: "添加字幕和動態文字，提升影片的可讀性和吸引力。",
  },
  {
    title: "影片轉場與套用濾鏡",
    content: "使用轉場效果和濾鏡，讓影片更加生動有趣。",
  },
  {
    title: "全自動上字幕功能",
    content: "介紹剪映的全自動上字幕功能，節省剪輯時間。",
  },
  {
    title: "影片輸出與輸入參數設定",
    content: "設定影片輸出的參數，確保最佳的視頻品質。",
  },
  {
    title: "手機操作CAPCUT",
    content: "掌握在手機上使用CAPCUT的技巧和操作方式。",
  },
  {
    title: "找圖片的好網站",
    content: "介紹一些好的圖片素材網站，以便在剪輯中使用高質量圖片。",
  },
  {
    title: "找音樂的好網站",
    content: "推薦一些優秀的音樂素材網站，供剪輯者選擇適合的背景音樂。",
  },
];
const LiveServicePage = () => {
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>影音教學課程-快速上手"剪映"</title>
        <meta name="description" content="直播剪輯服務 - 剪映教學" />
      </Head>

      <main className="flex flex-col justify-center items-center">
        <div
          className="h-svh w-full bg-cover bg-no-repeat bg-top"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          }}
        >
          <h1 className="text-center flex justify-center items-center h-full bg-gradient-to-r from-white via-zinc-200 to-white font-serif bg-clip-text text-3xl font-bold text-transparent md:text-7xl">
            影音教學課程<br></br>快速上手"剪映"
          </h1>
        </div>
        <div className="bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700">
          <div className="p-5 flex justify-center items-center">
            <h2 className="text-3xl font-serif text-white underline-text-gradient">課程內容</h2>
          </div>
          <div className="flex flex-wrap p-4 gap-3">
            {CONTAIN_DATA.map((item, index) => (
              <section
                key={item.title}
                className="p-4 rounded-lg shadow-lg mb-6 bg-white hover:bg-transparent hover:text-white transition duration-300"
              >
                <h2 className="text-3xl mb-4 font-serif underline-text-gradient">
                  {item.title}
                </h2>
                <p className="text-lg font-serif leading-relaxed underline-text-gradient">
                  {item.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Payment Section */}
      <section className="w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl mb-4 font-serif text-gray-800">付款專區</h2>
        <p className="text-lg font-serif text-gray-700 leading-relaxed">
          感謝您參與我們的影音教學課程！立即完成付款，開啟創作之旅。
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://cart.cashier.ecpay.com.tw/qp/tm9E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition duration-300"
          >
            立即付款
          </a>
          <a
            href="https://lin.ee/LciUsSk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition duration-300"
          >
            立即加入line聯絡
          </a>
        </div>
      </section>
    </div>
  );
};

export default LiveServicePage;
