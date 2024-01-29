import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const PhotoServiceData = [
  {
    id: 1,
    title: "商業攝影",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://app.simplymeet.me/moltiai-photo/ying-yin-ying-xiang-pai-she-fu-wu",
  },
  {
    id: 2,
    title: "短影音攝影",
    imageUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnQlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
    href: "/photoservice/shortvideo",
  },
  {
    id: 3,
    title: "直播服務",
    imageUrl:
      "https://images.unsplash.com/photo-1522327646852-4e28586a40dd?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://app.simplymeet.me/moltiai-photo/zhi-bo-pai-she-fu-wu",
  },
];

export default function PhotoService() {
  return (
    <section
      id="price"
      className="w-[90%] mx-auto bg-white pt-20 font-mono py-20"
    >
      <div className="py-5 px-5 mb-5 border-l-8 border-neutral-800">
        <h1 className="text-3xl font-bold">Molti Photo 立即預約</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
        {PhotoServiceData.map((data) => (
          <Link key={data.id} href={data.href} className="relative w-[300px] overflow-hidden group">
            <AspectRatio ratio={1 / 1}>
              <Image
                src={data.imageUrl}
                alt="image"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-all duration-200 ease-in-out:"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-black opacity-70 flex justify-center items-center">
              <p className="text-white text-md group-hover:text-lg transtion duration-200 ease-in-out">
                {data.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
