import Navbar from "@/components/global/Navbars/Navbar";
import DashboardSection from "@/components/page/keyword/DashboardSection/DashboardSection";
import KeywordSection from "@/components/page/keyword/TableSection/TableSection";
import DataRowSelectionContextProvider from "@/context/keyword/DataRowSelectionContext";
import { useState } from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[70px]">
        <DataRowSelectionContextProvider>
          <KeywordSection />
          <DashboardSection />
        </DataRowSelectionContextProvider>
      </main>
    </>
  );
};

export default index;
