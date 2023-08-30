import type { StaticImageData } from "next/image";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

type CountryCardProps = {
  imageUrl: StaticImageData;
  title: string;
  description: {store:string, status:boolean}[];
};

const CountryCard = ({ imageUrl, title, description }: CountryCardProps) => {
  return (
    <Card className="rounded-md bg-gray-200">
      <CardHeader className="rounded-md bg-white p-4">
        <CardTitle className="flex items-center gap-3">
          <Image
            src={imageUrl}
            alt={`${title}-country flag`}
            width={30}
            height={30}
          />
          <p>{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col p-4">
        {description.map((store, index) => (
          <div key={index} className="flex items-center gap-2">
            {store.status === true ? <TaskAltRoundedIcon sx={{ color: "green", fontSize: "1.2rem" }}/>:<DriveFileRenameOutlineOutlinedIcon sx={{ color: "gray", fontSize: "1.2rem" }}/> }
            <p className="text-xl text-black">{store.store}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CountryCard;
