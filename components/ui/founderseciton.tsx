import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-32 px-8 bg-[#030303] relative overflow-hidden" id="founder">
      {/* Subtle background glow to match pricing */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#0497ff]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Image Side - Editorial Style */}
          <div className="relative group w-full md:w-5/12">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/newimage.jpg"
                alt="Ilyes - Founder of Veyronix"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                loading="lazy"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 p-4 rounded-xl backdrop-blur-md shadow-2xl">
              <p className="text-[#0497ff] text-xs font-bold uppercase tracking-widest mb-1">Founder & Lead</p>
              <p className="text-white font-medium">Ilyes Sissaoui</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 
                className="text-4xl md:text-6xl font-light text-white leading-tight"
                style={{ fontFamily: "var(--font-halant)" }}
              >
                The Vision Behind <br />
                <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                  Veyronix
                </span>
              </h2>
              <div className="h-1 w-20 bg-[#0497ff]/50 rounded-full" />
            </div>

            <div className="space-y-6 text-zinc-400 font-light text-lg md:text-xl leading-relaxed">
              <p>
                Hey, I&apos;m Ilyes. I run Veyronix, a design and development studio where we 
                transform raw ideas into market-ready digital products. 
              </p>
              <p>
                Unlike big agencies, <span className="text-zinc-100">I only take on 3 clients a month.</span> This ensures I stay 
                personally involved in every pixel of your design and every line of your Framer site.
              </p>
              <p>
                If you&apos;re looking for a partner who bridges the gap between high-end 
                aesthetics and clean execution, let&apos;s build something together.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://calendly.com/ilyes-sissaoui/30min" 
                className="inline-flex items-center gap-3 group"
              >
                <div className="bg-white text-black font-semibold px-8 py-4 rounded-xl group-hover:bg-[#0497ff] group-hover:text-white transition-all duration-300 flex items-center">
                  Schedule a Call
                  <Calendar className="ml-2 h-5 w-5" />
                </div>
                <div className="p-4 rounded-xl border border-white/10 group-hover:border-[#0497ff]/50 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-white group-hover:text-[#0497ff]" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}