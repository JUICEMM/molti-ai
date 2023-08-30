import DashboardInputSection from "@/components/page/dashboard/DashboardInputSection";
import DashboardRenderSection from "@/components/page/dashboard/DashboardRenderSection";
import Navbar from "@/components/global/Navbars/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <section className="pt-[70px]">
        <DashboardInputSection /> 
        <DashboardRenderSection />
      </section>
    </>
  );
};

export default index;
