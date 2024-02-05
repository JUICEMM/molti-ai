import { Button } from "../../ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

type FunctionCardProps = {
  imageUrl: Array<StaticImageData | string>;
  title: string;
  description: string;
  href: string;
  pay: boolean;
  index: number;
};

const FunctionCard = ({
  imageUrl,
  title,
  description,
  href,
  pay,
  index,
}: FunctionCardProps) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center gap-3 px-5 py-8 md:py-16 w-[90%] mx-auto text-white rounded-3xl ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="md:basis-1/2 w-full relative flex items-center justify-center px-5">
        <AspectRatio ratio={16 / 9} className="w-[90%] mx-auto rounded-3xl flex justify-center items-center">
          {imageUrl.length > 1 ? (
            <div>
              {imageUrl.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="image"
                  className={`w-[200px] h-[100px] sm:w-[300px] sm:h-[200px] md:w-[450px] md:h-[300px] object-cover object-left-top rounded-xl absolute ${index === 0 ? "z-2 top-5 left-5 md:top-0 md:left-0" : "z-1 top-12 left-12 md:top-24 md:left-24"} hover:z-[999] transition-all hover:scale-110 duration-150 ease-in-out`}
                  priority
                />
              ))}
            </div>
          ) : (
            <div>
              <Image
                src={imageUrl[0]!}
                alt="image"
                className="object-cover rounded-2xl"
                width={450}
                height={350}
                priority
              />
            </div>
          )}
        </AspectRatio>
      </div>
      <div className="md:basis-1/2 flex flex-col items-center md:items-start gap-2 px-5 text-center md:text-left">
        <h1 className="text-2xl font-bold text-white md:text-3xl">{title}</h1>
        <p className="text-md text-gray-200">{description}</p>
        <Button
          variant={"outline"}
          className="text-md border-black text-black mt-5"
          onClick={() => router.push(href)}
        >
          立即探索
        </Button>
      </div>
    </div>
  );
};

export default FunctionCard;
