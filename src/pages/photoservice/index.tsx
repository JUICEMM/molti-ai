import NavbarMenu_mobile from "@/components/global/Navbars/NavbarMenu_mobile";
import photoHeader from "../../../public/photo.jpg";
import ex1 from "../../../public/photoservice-ex1.png";
import ex2 from "../../../public/photoservice-ex2.png";
import ex3 from "../../../public/photoservice-ex3.png";
import ex4 from "../../../public/photoservice-ex4.png";
import ex5 from "../../../public/photoservice-ex5.png";
import ex6 from "../../../public/photoservice-ex6.png";
import { navItems } from "@/components/global/Navbars/Navbar";
import PhotoService from "@/components/page/photoservice/PhotoService";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
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
        description: "我們的專業剪輯師將為您創造出令人激賞的短視頻內容。",
        image:
          "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "特效和後期製作",
        description: "為您的視頻添加特效和後期製作，使內容更引人注目",
        image:
          "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "音樂和音效",
        description: "選用合適的音樂和音效，為您的短視頻增添更多的情感跟氛圍",
        image:
          "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <div className="md:ml-auto hidden md:flex md:items-center md:gap-3">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="text-md font-mono hover:border-b-2 hover:border-white"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <li className="hover:border-b-2 hover:border-white">
              <AnchorLink href={"#service"}>服務</AnchorLink>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <AnchorLink href={"#price"}>方案</AnchorLink>
            </li>
          </div>
        <NavbarMenu_mobile navItems={navItems}/>
        </ul>
      </nav>
      {/*Header*/}
      <section
        className="relative w-full h-dvh bg-cover bg-no-repeat bg-fixed bg-center"
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
      <section
        id="service"
        className="w-full min-h-screen bg-neutral-800 pt-16"
      >
        <Carousel className="w-full">
          <CarouselContent>
            {PHOTOSERVICEDATA.map((data) => (
              <PhotoServiceCard key={data.service_name} service_detail={data} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-5 -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 right-5 -translate-y-1/2" />
        </Carousel>
      </section>
      {/*教學介紹*/}
      <section
        id="tutorial"
        className="w-full min-h-screen bg-neutral-700 py-20"
      >
        <div className="flex justify-center py-5">
          <h2 className="w-[50%] text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            <span>-</span> 剪輯全方位教學，專業攝影師指導<span>-</span>
          </h2>
        </div>
        <div className="mt-10">
          <div className="md:w-[80%] mx-auto flex justify-between items-center md:items-stretch flex-col md:flex-row gap-3 font-mono text-neutral-800">
            <div className="p-10 bg-white shadow-2xl shadow-neutral-900 flex flex-col gap-3 w-[300px] rounded-sm hover:scale-105 transition duration-100 ease-in-out">
              <p className="font-bold text-lg">我想剪輯</p>
              <p className="text-2xl font-bold">但不知道如何利用音樂跟特效？</p>
              <div className="flex justify-center">
                <MusicNoteOutlinedIcon sx={{ fontSize: "8rem" }} />
              </div>
              <p>
                學習基本的剪輯技巧，以及如何運用特效和音效創造出令人驚艷的視覺效果
              </p>
            </div>
            <div className="p-10 bg-white shadow-2xl shadow-neutral-900 flex flex-col gap-3 w-[300px] rounded-sm hover:scale-105 transition duration-100 ease-in-out">
              <p className="font-bold text-lg">會放背景音樂</p>
              <p className="text-2xl font-bold">但不知道後期製作技巧？</p>
              <div className="flex justify-center">
                <ColorLensOutlinedIcon sx={{ fontSize: "8rem" }} />
              </div>
              <p>暸解後期製作的技巧，包含顏色較準、畫面穩地和過場效果等。</p>
            </div>
            <div className="p-10 bg-white shadow-2xl shadow-neutral-900 flex flex-col gap-3 w-[300px] rounded-sm hover:scale-105 transition duration-100 ease-in-out">
              <p className="font-bold text-lg">影片製作沒問題</p>
              <p className="text-2xl font-bold">但總覺得影片始終如一沒創新？</p>
              <div className="flex justify-center">
                <EmojiObjectsOutlinedIcon sx={{ fontSize: "8rem" }} />
              </div>
              <p>學習如何發揮創意，創造出獨特而吸引人的影片內容。</p>
            </div>
          </div>
        </div>
      </section>
      {/*攝影團隊歷年經驗*/}
      <section className="w-full min-h-screen bg-neutral-800 py-20">
        <div className="w-full bg-neutral-800 flex justify-center">
          <h1 className="text-3xl font-bold text-white font-mono">
            攝影團隊歷年經驗
          </h1>
        </div>
        <div className="p-5 space-y-5">
          <p className="text-white font-mono font-bold text-2xl"></p>
          <div className="grid grid-cols-1  md:grid-cols-2 justify-items-center items-center gap-5">
            <Image
              src={ex1}
              alt="活動紀錄"
              width={500}
              height={217}
              className="hover:scale-105 transition duration-100 ease-in-out"
            />
            <Image
              src={ex2}
              alt="活動紀錄"
              width={500}
              height={217}
              className="hover:scale-105 transition duration-100 ease-in-out"
            />
            <Image
              src={ex3}
              alt="活動紀錄"
              width={500}
              height={217}
              className="hover:scale-105 transition duration-100 ease-in-out"
            />
            <Image
              src={ex4}
              alt="活動紀錄"
              width={500}
              height={217}
              className="hover:scale-105 transition duration-100 ease-in-out"
            />
            <Image
              src={ex5}
              alt="活動紀錄"
              width={500}
              height={217}
              className="hover:scale-105 transition duration-100 ease-in-out"
            />
            <Image
              src={ex6}
              alt="活動紀錄"
              width={500}
              height={217}
              className="hover:scale-105 transition duration-100 ease-in-out"
            />
          </div>
        </div>
      </section>
      {/*預約*/}
      <section id="booking" className="w-full bg-neutral-700 py-20">
        <div className="flex justify-center py-5">
          <h2 className="w-fit text-2xl md:text-4xl font-bold text-white">
            對我們的服務有興趣的您可以
          </h2>
        </div>
        <div className="flex justify-center items-center gap-10">
          <button className="p-4 md:p-8 bg-neutral-600 border border-neutral-950 rounded-xl text-md md:text-xl text-white">
            立即預約諮詢
          </button>
          <button className="p-4 md:p-8 bg-neutral-600 border border-neutral-950 rounded-xl text-md md:text-xl text-white">
            查看預約時間
          </button>
        </div>
      </section>
      {/*方案*/}
      <PhotoService />
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
      <div className="flex justify-center items-center font-mono font-bold text-white py-10 text-4xl">
        <h2 className="border-b-4 border-white w-fit">
          {service_detail.service_name}
        </h2>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex items-center flex-col md:flex-row gap-16">
          {service_detail.service_detail.map((data) => (
            <div key={data.title} className="w-[350px] h-auto bg-neutral-800 flex flex-col rounded-2xl">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  priority
                  className="rounded-2xl"
                />
              </AspectRatio>
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
