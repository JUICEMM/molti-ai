import Navbar from "@/components/global/Navbars/Navbar";
import AIInputSection from "@/components/page/keyword-ai/AIInputSection";
import AIRenderSection from "@/components/page/keyword-ai/AIRenderSection";
import { useState } from "react";

const KeywordAIPage = () => {
  const [result,setResult] = useState("")
  const [isLoading,setIsLoading] = useState(false)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[70px]">
        <AIInputSection setResult={setResult} setIsLoading={setIsLoading}/>
        <AIRenderSection result={result} isLoading={isLoading}/>
      </main>
    </>
  );
};

export default KeywordAIPage;
