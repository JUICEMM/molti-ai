import { Button } from "@/components/ui/button";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import EmergencyRecordingOutlinedIcon from '@mui/icons-material/EmergencyRecordingOutlined';

const consultantMap = [
  {
    icon: <LanguageOutlinedIcon sx={{ color: "black", fontSize: "3.2rem" }} />,
    title: "Tiktok代運營",
    subtitle: ["開設Tiktok帳號", "讓你快速漲粉", "鎖定您的專屬紛絲"],
  },
  {
    icon: <PeopleOutlinedIcon sx={{ color: "black", fontSize: "3.2rem" }} />,
    title: "Tiktok經營教學",
    subtitle: ["養帳號秘訣", "如何尋找您的粉絲", "經營方向建議"],
  },
  {
    icon: <EmergencyRecordingOutlinedIcon sx={{ color: "black", fontSize: "3.2rem" }} />,
    title: "Tiktok短影音拍攝",
    subtitle: ["企業主題企劃", "抓緊爆紅內容", "鼓勵粉絲與品牌戶互動，病毒式傳播效益"],
  },
];

export default function ConsultantPage() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[450px] flex flex-col items-center justify-center font-sans text-white "
        style={{
          backgroundImage: `url(https://web-assets.bcg.com/dims4/default/7f82b31/2147483647/strip/true/crop/1920x708+0+0/resize/2560x944!/brightness/-18x0/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F85%2Fbd%2F90153a2541bbb69372ba4bb0c1d5%2Fhero-people-culture.jpg)`,
        }}
      >
        {/* 主Header */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white font-Serif">
            短影音代運營
          </h1>
        </div>

        {/* 兩個小Section */}
      </div>
      <div className="container mx-auto p-8 rounded-md text-gray-800">
        <div className="p-6 rounded-md bg-white mt-5">
          <h2 className="text-2xl font-bold mb-4">我們的優勢</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
            {consultantMap.map((item, index) => (
              <ConsultantCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-2 text-center">
        <Button className="px-6 py-8">
          <a href="https://lin.ee/LciUsSk" className="px-6 py-8">
            立即聯絡
          </a>
        </Button>
      </div>
    </>
  );
}

type ConsultantCardProps = {
  icon: JSX.Element;
  title: string;
  subtitle: string[];
  index: number;
};

const ConsultantCard = ({ icon, title, subtitle, index}: ConsultantCardProps) => {
  return (
    <div className="p-4 flex flex-col items-center gap-3 w-[300px]">
      <div>{icon}</div>
      <h2 className={`text-2xl font-bold text-blue-500`}>{title}</h2>
      <ul className="list-disc list-inside">
        {subtitle.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
