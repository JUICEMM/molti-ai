
type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="px-5 py-5 text-white w-[70%]">
      <div className="flex justify-center px-5">
       {icon}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-5 text-center">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
