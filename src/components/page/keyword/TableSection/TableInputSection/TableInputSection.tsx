import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import KeywordInputForm from "./TableInputForm";

const TableInputSection = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-center">
        <Card className="w-full border border-teal-500">
          <CardHeader>
            <CardTitle>關聯字搜索</CardTitle>
            <CardDescription>選擇相關變數取得關聯字</CardDescription>
          </CardHeader>
          <CardContent>
            <KeywordInputForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableInputSection;
