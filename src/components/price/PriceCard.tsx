import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

type PriceCardProps = {
  title: string;
  price: string;
  features: { [key: string]: string }[];
};
const PriceCard = ({ title, price, features }: PriceCardProps) => {
  return (
    <Card className="h-auto w-auto rounded-3xl border border-teal-500 p-1 md:w-[300px]">
      <CardHeader className="flex flex-col gap-5">
        <CardTitle>{title}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        {/*Plan price*/}
        <div className="flex items-end">
          <p className="text-4xl font-bold">${price}</p>
          <span className="text-md">/月</span>
        </div>
        {/*Plan buying button*/}
        <div>
          <Button className="w-full bg-teal-500 hover:bg-teal-400">
            選擇方案
          </Button>
        </div>
        {/*Plan features*/}
        <div className="flex flex-col gap-3 text-sm">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p>{feature.feature_name}</p>
              </div>
              <div>
                <p>{feature.feature_value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default PriceCard;
