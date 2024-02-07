import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PriceCardProps = {
  title: string;
  price: string;
  features: Array<{ [key: string]: string }>;
  href?: string;
};
const PriceCard = ({ title, price, features, href }: PriceCardProps) => {
  return (
    <Card className="h-auto w-auto rounded-3xl border border-sky-500 p-1 md:w-[300px]">
      <CardHeader className="flex flex-col gap-5">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        {/*Plan price*/}
        <div className="flex items-end">
          <p className="text-4xl font-bold">${price}</p>
          <span className="text-md">/月</span>
        </div>
        {/*Plan buying button*/}
        {title === "免費版" ? (
          <Button variant={"default"} className="border border-sky-500 bg-sky-600 hover:bg-sky-700">
            <a href={href} target={"_blank"} className="w-full">
              目前方案
            </a>
          </Button>
        ) : (
          <>
            <Button variant={"outline"} className="border border-sky-500">
              <a href={href} target={"_blank"} className="w-full">
                選擇方案
              </a>
            </Button>
          </>
        )}
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
