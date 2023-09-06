import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDataRowSelectionContext } from "@/context/keyword/DataRowSelectionContext";
import DashboardRenderSection from "./DashboardRenderSection";
import _ from "lodash";

type DashboardRenderSectionProps = {
  isDashboardOpen: boolean;
  setIsDashboardOpen: (isDashboardOpen: boolean) => void;
};

const DashboardSection = ({
  isDashboardOpen,
  setIsDashboardOpen,
}: DashboardRenderSectionProps) => {
  const { rowSelection, setRowSelection } = useDataRowSelectionContext();
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={
                isDashboardOpen === true ? "hidden" : "flex justify-center py-4"
              }
            >
              <Button
                disabled={_.isEmpty(rowSelection)}
                className={
                  _.isEmpty(rowSelection)
                    ? "h-[60px] w-[200px] bg-teal-300 opacity-30 hover:bg-teal-600"
                    : "h-[60px] w-[200px] bg-teal-500 hover:bg-teal-600"
                }
                variant={"default"}
                onClick={() => {
                  setIsDashboardOpen(true);
                }}
              >
                觀看圖表
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {_.isEmpty(rowSelection)
              ? "請勾選想比較的關聯字資訊"
              : "點擊此按鈕觀看圖表"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
