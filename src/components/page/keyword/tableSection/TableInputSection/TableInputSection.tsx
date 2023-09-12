import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableInputForm from "./TableInputForm";

const TableInputSection = () => {
  return (
    <div className="p-1 md:p-8">
      <div className="flex items-center justify-center">
        <Card className="w-full border border-teal-500">
          <CardHeader>
            <CardTitle>關鍵字搜索</CardTitle>
            <CardDescription>選擇相關變數取得關鍵字</CardDescription>
          </CardHeader>
          <CardContent>
            <TableInputForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableInputSection;
