import { motion } from "framer-motion";

type ProblemCardProps = {
  title: string;
  image: string;
  index: number;
};
export default function ProblemCard({ title, image, index }: ProblemCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 * index }}
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="relative rounded-full py-10 px-20 w-full shadow-lg"
    >
      <div className="absolute left-[-20px] bottom-16 shadow-md text-white text-xl flex justify-center items-center rounded-full w-[80px] h-[80px] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
        {index + 1}
      </div>
      <h1 className="text-xl md:text-2xl">{title}</h1>
    </motion.div>
  );
}
