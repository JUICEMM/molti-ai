import DashboardRenderSection from "./DashboardRenderSection";
import DashboardRenderButton from "./DashboardRenderButton";
import { useState } from "react";

const DashboardSection = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);
  return (
    <>
      <DashboardRenderButton
        isDashboardOpen={isDashboardOpen}
        setIsDashboardOpen={setIsDashboardOpen}
      />
      {!!isDashboardOpen && <DashboardRenderSection />}
    </>
  );
};

export default DashboardSection;
