import { useContext, createContext, useState } from "react";
import type { ReactNode, Dispatch } from "react";

type DataRowSelectionContextProviderType = {
  children: ReactNode;
};

type DataRowSelectionContextType = {
  rowSelection: any;
  setRowSelection: Dispatch<any>;
};

const DataRowSelectionContext = createContext<
  DataRowSelectionContextType | undefined
>(undefined);

export function useDataRowSelectionContext() {
  const context = useContext(DataRowSelectionContext);
  if (!context) {
    throw new Error(
      "useDataRowSelectionContext must be used within a DataRowSelectionContextProvider"
    );
  }
  return context;
}

export default function DataRowSelectionContextProvider({
  children,
}: DataRowSelectionContextProviderType) {
  const [rowSelection, setRowSelection] = useState<
    Record<string, number> | undefined
  >({});
  return (
    <DataRowSelectionContext.Provider value={{ rowSelection, setRowSelection }}>
      {children}
    </DataRowSelectionContext.Provider>
  );
}
