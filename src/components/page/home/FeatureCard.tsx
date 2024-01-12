import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4*index }}
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="px-5 py-5 text-white w-[70%]"
    >
      <div className="flex justify-center px-5">{icon}</div>
      <div className="flex flex-col justify-center items-center gap-2 p-5 text-center">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
