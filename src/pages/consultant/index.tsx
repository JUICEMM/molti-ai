import React from "react";

export default function ConsultantPage() {
  return (
    <div className="bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center font-sans text-white" style={{backgroundImage: `url(https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
      {/* 主Header */}
      <h1 className="text-4xl font-bold mb-8">顧問服務</h1>

      {/* 兩個小Section */}
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-5 p-8 shadow-md rounded-md text-gray-800">
        <div className="lg:w-1/2 mb-8 lg:mb-0 p-6 rounded-md bg-white">
          <h2 className="text-2xl font-bold mb-4">大陸營業執照與證件辦理</h2>
          <p className="text-gray-700">
            我們可以協助您辦理大陸營業執照，讓你在抖音平台上合法經營
          </p>
        </div>

        <div className="lg:w-1/2 p-6 rounded-md bg-white">
          <h2 className="text-2xl font-bold mb-4">營業證照辦理與申請流程</h2>
          <p className="text-gray-700">
            我們將協助您完成營業執照的申請流程，節省您的寶貴時間與精力
          </p>
        </div>
      </div>
    </div>
  );
}
