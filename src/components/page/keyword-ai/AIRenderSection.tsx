import LoadingSpinner from "@/components/global/loading/LoadingSpinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AIRenderSectionProps = {
  result: string;
  isLoading: boolean;
};

const AIRenderSection = ({ result, isLoading }: AIRenderSectionProps) => {
  function splitTextToArray(text: string) {
    // 使用正则表达式将文本按数字和点号分隔
    const regex = /\d+\.\s+/;
    const items = text.split(regex).filter((item) => item.trim() !== "");

    return items;
  }

  const resultArray = splitTextToArray(result);
  console.log(resultArray);
  return (
    <div className="p-1 md:p-8">
      <div className="flex items-center justify-center">
        <Card className="w-full border border-teal-500">
          <CardHeader>
            <CardTitle>關鍵字排序</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="min-h-[70px]">
              {!!isLoading ? (
                <div className="flex flex-col gap-2 items-center justify-center">
                  <LoadingSpinner />
                  <span>我會盡力提供您所需的信息，但需要稍微的時間來完成這項任務。</span>
                  <span>請您耐心等待至少60~100秒，我將竭盡所能為您提供最佳的解答。</span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {resultArray.map((item, index) => (
                    <p key={index}>
                      {index + 1}.{item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIRenderSection;
