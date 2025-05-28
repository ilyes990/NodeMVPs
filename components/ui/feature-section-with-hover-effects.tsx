import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Speed Without Sacrificing Quality",
      description:
        "We don't just build fast — we build smart. Our 2-week sprint delivers launch-ready MVPs that are clean, scalable, and built to impress.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Fixed Price, No Surprises",
      description:
        "You know exactly what you'll pay upfront. for any SaaS or mobile MVP no hidden fees, no scope creep.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Built for Founders, by Founders",
      description:
        "We've been in your shoes. We know how important momentum is in the early days. That's why we built a process that cuts through fluff and gets you results, fast.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Real Results, Real Products",
      description: "From AI tools to subscription trackers, we've helped founders go from idea to launch in just weeks, not months.",
      icon: <IconCloud />,
    },
    {
      title: "Full Ownership, Zero Lock-In",
      description: "You own 100% of your code. No vendor lock-in. No strings attached.",
      icon: <IconRouteAltLeft />,
    }
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
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
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
      <div className="mb-4 relative z-10 px-10 text-yellow-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-yellow-400 transition-all duration-200 origin-center" />
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