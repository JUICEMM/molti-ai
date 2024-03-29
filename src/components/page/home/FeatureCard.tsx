type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <div
      
      className="text-white"
    >
      <div className="flex justify-center px-5">{icon}</div>
      <div className="flex flex-col justify-center items-center gap-2 p-5 text-center line-clamp-1">
        <h1 className="text-2xl font-bold text-black line-clamp-1">{title}</h1>
        <p className="text-md text-gray-700 max-w-[300px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
