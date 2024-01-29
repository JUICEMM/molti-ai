import AIHeader from "@/components/page/keyword-ai/AIHeader";
import AIInputSection from "@/components/page/keyword-ai/AIInputSection";
import AIRenderSection from "@/components/page/keyword-ai/AIRenderSection";
import { useState } from "react";

const KeywordAIPage = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <main className="min-h-dvh bg-gray-100">
        <AIHeader />
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/2">
            <AIInputSection setResult={setResult} setIsLoading={setIsLoading} />
          </div>
          <div className="basis-1/2">
            <AIRenderSection result={result} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </>
  );
};

export default KeywordAIPage;
