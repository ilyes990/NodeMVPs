import { ArrowUpRight, Check, Crown, ShieldCheck, Zap } from "lucide-react";

const PricingSection = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$600",
      description: "Perfect for high-conversion landing pages.",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      features: ["Custom Figma Design", "Framer Development", "Mobile Responsive", "Basic SEO Setup"],
      buttonText: "Get Started",
      highlight: false,
      glow: "from-blue-500/10 to-transparent",
    },
    {
      name: "Professional",
      price: "$1,400",
      description: "Full brand digital presence and CMS sites.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      features: ["Up to 5 Pages", "Advanced Animations", "CMS Integration", "Premium Assets", "Strategy Call"],
      buttonText: "Start Project",
      highlight: true,
      glow: "from-indigo-500/20 to-transparent",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Complex UI/UX for dashboards and mobile apps.",
      icon: <Crown className="w-5 h-5 text-purple-400" />,
      features: ["Full Product UI Kit", "Mobile App Design", "Design System", "Unlimited Revisions", "Dev Handoff"],
      buttonText: "Contact Us",
      highlight: false,
      glow: "from-purple-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-32 px-8 bg-[#030303] text-zinc-100 overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-blue-500/10 blur-[120px]" />
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-halant)" }}>
            Premium Solutions
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Muted, elegant, and professional pricing for startups looking to scale their visual identity.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative group transition-all duration-700 ${
                tier.highlight ? "md:-mt-8 md:mb-8 z-20" : "z-10"
              }`}
            >
              {/* The Ambient Glow Background */}
              <div className={`absolute -inset-[1px] rounded-[24px] bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${tier.glow}`} />
              
              {/* Card Surface */}
              <div className={`relative h-full rounded-[22px] border border-white/5 bg-gradient-to-b from-zinc-900/50 to-black/80 backdrop-blur-xl p-8 flex flex-col shadow-2xl transition-transform duration-500 group-hover:-translate-y-2`}>
                
                {/* Subtle Inner Light Reflection (Top Left) */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 bg-zinc-800/50 rounded-xl border border-white/5 shadow-inner">
                      {tier.icon}
                    </div>
                    {tier.highlight && (
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full">
                            Popular
                        </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-medium mb-2 text-zinc-200" style={{ fontFamily: "var(--font-halant)" }}>
                    {tier.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-semibold tracking-tighter text-white">
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && <span className="text-zinc-600 text-sm"> starting</span>}
                  </div>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {tier.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-8" />

                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-400 group/item">
                      <div className="mr-3 p-0.5 rounded-full bg-zinc-800/80 border border-white/5 transition-colors group-hover/item:border-blue-500/30">
                        <Check className="w-3 h-3 text-zinc-500 group-hover/item:text-blue-400 transition-colors" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`relative w-full py-4 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden group/btn ${
                    tier.highlight
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-800/50 text-zinc-300 hover:text-white border border-white/5 hover:bg-zinc-800"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {tier.buttonText}
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="mt-20 text-center">
            <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">Trusted by modern startups worldwide</p>
            <div className="flex justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Add small grayscale logos here if needed */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;