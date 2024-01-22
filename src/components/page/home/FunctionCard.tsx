import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../../ui/button";
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="flex flex-col gap-3 px-5 py-5 text-white"
    >
      <div className="w-[100%] md:w-[600px] flex justify-center px-5">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageUrl}
            alt="image"
            fill
            sizes="(100vw - 2rem)"
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-2 px-5 text-center">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="text-xl text-gray-200">{description}</p>
      </div>
      <div className="flex justify-start gap-2 px-5 mt-auto">
        <>
          <Button
            variant={"outline"}
            className="text-md border-black text-black"
            onClick={() => router.push(href)}
          >
            立即前往
          </Button>
        </>
      </div>
    </motion.div>
  );
};

export default FunctionCard;
