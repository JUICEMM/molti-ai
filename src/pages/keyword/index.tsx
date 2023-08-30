import Navbar from "@/components/global/Navbars/Navbar";
import DashboardRenderSection from "@/components/page/keyword/dashboard/DashboardRenderSection";
import KeywordInputSection from "@/components/page/keyword/KeywordInputSection";
import KeywordRenderSection from "@/components/page/keyword/KeywordRenderSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const index = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[70px]">
        <KeywordInputSection />
        <KeywordRenderSection setIsDashboardOpen={setIsDashboardOpen} />
        <div
          className={
            isDashboardOpen === true ? "hidden" : "flex justify-center py-4"
          }
        >
          <Button
            className="h-[60px] w-[200px]"
            variant={"default"}
            onClick={() => {
              setIsDashboardOpen(true);
            }}
          >
            觀看圖表
          </Button>
        </div>
        {isDashboardOpen === true ? (
          <div id="dashboard">
            <DashboardRenderSection isDashboardOpen={isDashboardOpen} />
          </div>
        ) : null}
      </main>
    </>
  );
};

export default index;
