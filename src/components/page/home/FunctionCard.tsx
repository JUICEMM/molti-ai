import { Button } from "../../ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

type FunctionCardProps = {
  imageUrl: StaticImageData | string;
  title: string;
  description: string;
  href: string;
  pay: boolean;
};

const FunctionCard = ({
  imageUrl,
  title,
  description,
  href,
  pay,
}: FunctionCardProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-3 px-5 py-5 w-[80%] text-white rounded-xl overflow-hidden">
      <div className="w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center px-5">
        <AspectRatio ratio={16 / 9} className="w-[90%] mx-auto rounded-md">
          <Image
            src={imageUrl}
            alt="image"
            fill
            className="object-cover rounded-md"
            priority
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-2 px-5 text-center">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="text-md text-gray-200">{description}</p>
      </div>
      <div className="flex justify-start gap-2 px-5 mt-auto">
        <>
          <Button
            variant={"outline"}
            className="text-xs border-black text-black"
            onClick={() => router.push(href)}
          >
            立即前往
          </Button>
        </>
      </div>
    </div>
  );
};

export default FunctionCard;
