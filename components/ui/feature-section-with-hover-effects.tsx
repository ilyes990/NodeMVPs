import { cn } from "@/lib/utils";
import Image from "next/image";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Results-Driven",
      description: "Every pixel is designed to increase conversions and sales.",
      iconSrc: "/iconimages/result-driven.png",
    },
    {
      title: "Fast Delivery",
      description: "Pixel-perfect interfaces delivered in weeks, not months.",
      iconSrc: "/iconimages/fast-delibery.png",
    },
    {
      title: "User-Focused",
      description:
        "Clean, intuitive experiences that your customers actually enjoy using.",
      iconSrc: "/iconimages/userfocused.png",
    },
    {
      title: "Proven Impact",
      description:
        "We track what matters: higher engagement, more leads, bigger revenue.",
      iconSrc: "/iconimages/provenimpact.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  iconSrc,
  index,
}: {
  title: string;
  description: string;
  iconSrc: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <Image
          src={iconSrc}
          alt={title}
          width={60}
          height={60}
          className="w-20 h-20 object-contain"
        />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-[#0497ff] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
