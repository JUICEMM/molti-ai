import Navbar from "@/components/global/Navbars/Navbar";
import AIInputSection from "@/components/page/keyword-ai/AIInputSection";
import AIRenderSection from "@/components/page/keyword-ai/AIRenderSection";
import { useState } from "react";

const KeywordAIPage = () => {
  const [result,setResult] = useState("")
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[70px]">
        <AIInputSection setResult={setResult}/>
        <AIRenderSection result={result}/>
      </main>
    </>
  );
};

export default KeywordAIPage;
