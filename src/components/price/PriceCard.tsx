import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"

type PriceCardProps = {
    title: string
    price: string
}
const PriceCard = ({title,price}:PriceCardProps) => {
  return (
    <Card className="w-auto h-[550px] p-5 rounded-3xl border border-teal-500 md:w-[300px]">
      <CardHeader className="flex flex-col gap-5">
        <CardTitle>{title}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex items-end">
            <p className="text-4xl font-bold">${price}</p>
            <span className="text-md">/月</span>
        </div>
        <div>
            <Button className="w-full bg-teal-500 hover:bg-teal-400">選擇方案</Button>
        </div>
        <div>

        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
  )
}

export default PriceCard
