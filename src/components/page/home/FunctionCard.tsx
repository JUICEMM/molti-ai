import { Button } from "../../ui/button";
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
    <div className="flex flex-col gap-3 px-5 py-5 text-white">
      <div className="flex justify-center px-5">
        <Image
          src={imageUrl}
          alt="image"
          width={550}
          height={400}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 px-5 text-center">
        <h1 className="text-3xl text-black font-bold">{title}</h1>
        <p className="text-xl text-gray-700">{description}</p>
      </div>
      <div className="mt-auto flex justify-start gap-2 px-5">
        <>
          <Button
            variant={"outline"}
            className="text-md border-black text-black"
            onClick={() => router.push(href)}
          >
            立即前往
          </Button>
        </>
        )
      </div>
    </div>
  );
};

export default FunctionCard;
