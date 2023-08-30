import Navbar from "@/components/global/Navbars/Navbar";
import KeywordInputSection from "@/components/page/keyword/KeywordInputSection";
import KeywordRenderSection from "@/components/page/keyword/KeywordRenderSection";

const index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[70px]">
        <KeywordInputSection />
        <KeywordRenderSection />
      </main>
    </>
  );
};

export default index;
