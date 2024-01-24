import { Button } from "@/components/ui/button";
import React from "react";

export default function ConsultantPage() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[450px] flex flex-col items-center justify-center font-sans text-white "
        style={{
          backgroundImage: `url(https://web-assets.bcg.com/dims4/default/7f82b31/2147483647/strip/true/crop/1920x708+0+0/resize/2560x944!/brightness/-18x0/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F85%2Fbd%2F90153a2541bbb69372ba4bb0c1d5%2Fhero-people-culture.jpg)`,
        }}
      >
        {/* 主Header */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white font-Serif">
            我們還提供顧問服務
          </h1>
        </div>

        {/* 兩個小Section */}
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-5 p-8 rounded-md text-gray-800">
        <div className="lg:w-1/2 mb-8 lg:mb-0 p-6 rounded-md bg-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">大陸營業執照與證件辦理</h2>
          <p className="text-gray-700">
            我們可以協助您辦理大陸營業執照，讓你在抖音平台上合法經營
          </p>
        </div>

        <div className="lg:w-1/2 p-6 rounded-md bg-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">營業證照辦理與申請流程</h2>
          <p className="text-gray-700">
            我們將協助您完成營業執照的申請流程，節省您的寶貴時間與精力
          </p>
        </div>
      </div>
      <div className="py-2 text-center">
        <Button className="px-6 py-8">
          <a href="https://lin.ee/LciUsSk" className="px-6 py-8">立即聯絡</a>
        </Button>
      </div>
    </>
  );
}
