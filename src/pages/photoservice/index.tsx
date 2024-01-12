import photoHeader from "../../../public/photo.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const PHOTOSERVICEDATA = [
  {
    service_name: "影片拍攝服務",
    service_detail: [
      {
        title: "專業攝影師",
        description: "我們提供專業攝影師的服務，確保您的短視頻內容更上一層樓。",
        image:
          "https://images.unsplash.com/photo-1508004680771-708b02aabdc0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "精選場景",
        description:
          "我們會幫助您選擇最適合您內容的拍攝場景，以營造出最佳的視覺效果",
        image:
          "https://images.unsplash.com/photo-1511765392540-a4f3d816bfbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "後製剪輯",
        description:
          "由影像團隊初剪完成後供業主參考是否有需要調整的內容，提交影片檔案，提供影片下載連結",
        image:
          "https://images.unsplash.com/photo-1487537708572-3c850b5e856e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    service_name: "影片剪輯服務",
    service_detail: [
      {
        title: "專業剪輯師",
        description: "我們提供專業攝影師的服務，確保您的短視頻內容更上一層樓。",
        image:
          "https://images.unsplash.com/photo-1508004680771-708b02aabdc0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "特效和後期製作",
        description:
          "我們會幫助您選擇最適合您內容的拍攝場景，以營造出最佳的視覺效果",
        image:
          "https://images.unsplash.com/photo-1511765392540-a4f3d816bfbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "音樂和音效",
        description:
          "由影像團隊初剪完成後供業主參考是否有需要調整的內容，提交影片檔案，提供影片下載連結",
        image:
          "https://images.unsplash.com/photo-1487537708572-3c850b5e856e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

export default function PhotoServicePage() {
  return (
    <main>
      <nav className="text-white font-mono bg-neutral-800 fixed left-0 right-0 z-[999] py-5">
        <ul className="flex items-center w-[80%] mx-auto">
          <li className="text-xl">Molti Photo</li>
          <div className="flex items-center gap-3 ml-auto">
            <li className="hover:border-b-2 hover:border-white">
              <Link href={"/photoservice"}>Home</Link>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <AnchorLink href={"#service"}>服務</AnchorLink>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <AnchorLink href={"#price"}>方案</AnchorLink>
            </li>
          </div>
        </ul>
      </nav>
      {/*Header*/}
      <section
        className="relative w-full h-screen bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${photoHeader.src})` }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col space-y-4 text-white font-mono font-bold">
            <h1 className="text-xl md:text-4xl lg:text-6xl">
              Molti Photo Service
            </h1>
            <p className="text-md md:text-xl lg:text-2xl">
              致力給您最好的攝影服務
            </p>
          </div>
        </div>
      </section>
      {/*服務介紹*/}
      <section className="w-full min-h-screen bg-neutral-800">
        <Carousel className="w-full">
          <CarouselContent>
            {PHOTOSERVICEDATA.map((data) => (
              <PhotoServiceCard service_detail={data} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-5 -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 right-5 -translate-y-1/2" />
        </Carousel>
      </section>
    </main>
  );
}

type PhotoServiceCardProps = {
  service_detail: {
    service_name: string;
    service_detail: {
      image: string;
      title: string;
      description: string;
    }[];
  };
};
function PhotoServiceCard({ service_detail }: PhotoServiceCardProps) {
  return (
    <CarouselItem>
      <div className="flex justify-center items-center font-mono font-bold text-white py-10 text-3xl">
        <h2 className="border-b-4 border-white w-fit">
          {service_detail.service_name}
        </h2>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex items-center gap-16">
          {service_detail.service_detail.map((data) => (
            <div className="w-[300px] h-auto bg-neutral-800 flex flex-col rounded-2xl">
              <Image
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <h3 className="p-4 text-white text-2xl font-bold font-mono">
                {data.title}
              </h3>
              <p className="p-4 text-white text-lg font-mono">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CarouselItem>
  );
}
