import Navbar from "@/components/global/Navbars/Navbar";
import DashboardSection from "@/components/page/keyword/dashboardSection/DashboardSection";
import KeywordSection from "@/components/page/keyword/tableSection/TableSection";
import DataRowSelectionContextProvider from "@/context/keyword/DataRowSelectionContext";

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
