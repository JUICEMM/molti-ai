import Navbar from "@/components/global/Navbars/Navbar";
import DashboardSection from "@/components/page/keyword/dashboardSection/DashboardSection";
import TableSection from "@/components/page/keyword/KeywordSection/TableSection";
import DataRowSelectionContextProvider from "@/context/keyword/DataRowSelectionContext";

const KeywordPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[70px]">
        <DataRowSelectionContextProvider>
          <TableSection />
          <DashboardSection />
        </DataRowSelectionContextProvider>
      </main>
    </>
  );
};

export default KeywordPage;
