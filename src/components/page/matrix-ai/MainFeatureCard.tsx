import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type MainFeatureCardProps = {
  feature: {
    title: string;
    description: string;
    image: StaticImageData | string;
  };
  index: number;
};

export default function MainFeatureCard({
  feature,
  index,
}: MainFeatureCardProps) {
  return (
    <div
      className={
        index % 2 === 0
          ? "flex flex-col-reverse lg:flex-row-reverse lg:gap-9 items-center w-[70%] mx-auto"
          : "flex flex-col lg:flex-row lg:gap-9 items-center w-[70%] mx-auto"
      }
    >
      <div className="flex flex-col items-center gap-3 basis-1/2">
        <h1 className="text-xl">{feature.title}</h1>
        <div className="text-lg leading-8">{feature.description}</div>
      </div>
      <div className="basis-1/2 hidden lg:block">
        <div className="w-[550px]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={feature.image}
              alt="matrix-ai"
              fill
              priority
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}
