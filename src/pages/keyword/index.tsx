import Navbar from "@/components/global/Navbars/Navbar";
import DashboardSection from "@/components/page/keyword/dashboardSection/DashboardSection";
import KeywordSection from "@/components/page/keyword/keywordSection/KeywordSection";

import { useState } from "react";

const index = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[70px]">
        <KeywordSection />
        <DashboardSection
          isDashboardOpen={isDashboardOpen}
          setIsDashboardOpen={setIsDashboardOpen}
        />
      </main>
    </>
  );
};

export default index;
