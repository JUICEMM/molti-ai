import { TwitchConfig } from "../TableSection";
import { DataTable } from "./dataTable/DataTable";
import DataRowSelectionContextProvider from "@/context/page/hotspot/DataRowSelectionContext";

type TableRenderSectionProps = {
  data: any;
  iframeUrl: string;
  TwitchFilterCategory: TwitchConfig | {};
  isLoading: boolean;
};

const TableRenderSection = ({
  data,
  iframeUrl,
  TwitchFilterCategory,
  isLoading,
}: TableRenderSectionProps) => {
  return (
    <div className="p-1 md:p-8 bg-slate-100">
      <div className="relative rounded-md border-0 bg-white">
        <iframe
          src={iframeUrl}
          width={"100%"}
          height="600"
          allowFullScreen
          className="rounded-md"
        />
       
      </div>
      <div>
        <DataRowSelectionContextProvider>
          <div className="flex flex-col gap-5 p-4 bg-slate-100">
            <div className="bg-white p-4 rounded-md h-[550px] overflow-scroll">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  Loading...
                </div>
              ) : (
                <DataTable
                  columns={
                    (TwitchFilterCategory as TwitchConfig).filteredColumns || []
                  }
                  data={
                    typeof (TwitchFilterCategory as TwitchConfig)
                      .getFilteredData === "function"
                      ? (TwitchFilterCategory as TwitchConfig).getFilteredData(
                          data
                        ) || []
                      : []
                  }
                />
              )}
            </div>
          </div>
        </DataRowSelectionContextProvider>
      </div>
    </div>
  );
};

export default TableRenderSection;
