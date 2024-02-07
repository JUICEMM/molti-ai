import { motion } from "framer-motion";

type ProblemCardProps = {
  title: string;
  image: string;
  index: number;
  className: string;
};
export default function ProblemCard({
  title,
  image,
  index,
  className,
}: ProblemCardProps) {
  return (
    <div
      className={`relative rounded-full py-8 px-16 shadow-lg w-fit ${className}`}
    >
      <div className="absolute left-[-20px] bottom-16 shadow-md text-white text-md flex justify-center items-center rounded-full w-[50px] h-[50px] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
        {index + 1}
      </div>
      <h1 className="text-xl md:text-2xl">{title}</h1>
    </div>
  );
}
