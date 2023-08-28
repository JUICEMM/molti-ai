import Navbar from "@/components/global/navbar/Navbar";
import KeywordInputSection from "@/components/keyword/KeywordInputSection";
import KeywordRenderSection from "@/components/keyword/KeywordRenderSection";

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
