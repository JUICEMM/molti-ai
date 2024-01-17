import TableInputSection from "./TableInputSection/TableInputSection";
import TableRenderSection from "./TableRenderSection/TableRenderSection";
import { useState } from "react";

const TableSection = () => {
  const [iframeUrl, setIframeUrl] = useState("");
  console.log("iframeUrl=", iframeUrl);
  return (
    <>
      <TableInputSection setIframeUrl={setIframeUrl} />
      <TableRenderSection iframeUrl={iframeUrl} />
    </>
  );
};

export default TableSection;
