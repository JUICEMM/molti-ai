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
            短影音代運營
          </h1>
        </div>

        {/* 兩個小Section */}
      </div>
      {/* <div className="container mx-auto p-8 rounded-md text-gray-800">
        <div className=" mb-8 lg:mb-0 p-6 rounded-md bg-white">
          <h2 className="text-2xl font-bold mb-4">有遇到以下問題？</h2>
          <div className="flex justify-center items-center">
            <div className="p-2 shadow-lg text-xl rounded-md">123</div>
            <div className="p-2 shadow-lg text-xl rounded-md">123</div>
            <div className="p-2 shadow-lg text-xl rounded-md">123</div>
          </div>
        </div>

        <div className="p-6 rounded-md bg-white mt-5">
          <h2 className="text-2xl font-bold mb-4">我們的優勢</h2>
          <div className="grid grid-cols-2">
            <div className="p-2 shadow-lg text-xl rounded-md">123</div>
            <div className="p-2 shadow-lg text-xl rounded-md">123</div>
            <div className="p-2 shadow-lg text-xl rounded-md">123</div>
            <div className="p-2 shadow-lg text-xl rounded-md">123</div>
          </div>
        </div>
      </div> */}
      <div className="py-2 text-center">
        <Button className="px-6 py-8">
          <a href="https://lin.ee/LciUsSk" className="px-6 py-8">立即聯絡</a>
        </Button>
      </div>
    </>
  );
}
