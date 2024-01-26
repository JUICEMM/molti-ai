type TableRenderSectionProps = {
  iframeUrl: string;
};

const TableRenderSection = ({ iframeUrl }: TableRenderSectionProps) => {
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
        {/* <div className="absolute left-0 right-0 top-0 h-[80px] bg-slate-100" /> */}
      </div>
    </div>
  );
};

export default TableRenderSection;
