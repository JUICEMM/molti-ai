import { Button } from "@/components/ui/button";
import DashboardRenderSection from "./DashboardRenderSection";

type DashboardRenderSectionProps = {
  isDashboardOpen: boolean;
  setIsDashboardOpen: (isDashboardOpen: boolean) => void;
};

const DashboardSection = ({
  isDashboardOpen,
  setIsDashboardOpen,
}: DashboardRenderSectionProps) => {
  return (
    <>
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
        <div>
          <DashboardRenderSection />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DashboardSection;
