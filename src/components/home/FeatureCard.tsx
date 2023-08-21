import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

type FeatureCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
};

const FeatureCard = ({
  imageUrl,
  title,
  description,
  href,
}: FeatureCardProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3 px-5 py-5 text-white">
      <div className="flex justify-center px-5">
        <Image
          src={imageUrl}
          alt=""
          width={650}
          height={650}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-5">
        <h1 className="text-3xl text-black font-bold">{title}</h1>
        <p className="text-xl text-gray-700">{description}</p>
      </div>
      <div className="mt-auto flex justify-start gap-2 px-5">
        <Button
          variant={"outline"}
          className="text-md border-black text-black"
          onClick={() => router.push(href)}
        >
          免費試用
        </Button>
        <Button
          variant={"ghost"}
          className="text-md text-teal-600"
          onClick={() => {
            router.push("/price");
          }}
        >
          探索方案
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
