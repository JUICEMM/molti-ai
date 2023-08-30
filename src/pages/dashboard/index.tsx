import DashboardInputSection from "@/components/dashboard/DashboardInputSection";
import DashboardRenderSection from "@/components/dashboard/DashboardRenderSection";
import Navbar from "@/components/global/navbar/Navbar";

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
