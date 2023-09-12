import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AIRenderSectionProps = {
  result: string
}

const AIRenderSection = ({result}: AIRenderSectionProps) => {
  return (
    <div className="p-1 md:p-8">
      <div className="flex items-center justify-center">
        <Card className="w-full border border-teal-500">
          <CardHeader>
            <CardTitle>關鍵字排序</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              {result}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIRenderSection;
