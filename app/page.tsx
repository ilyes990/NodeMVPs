"use client";
import AnimateOnScroll from "@/components/blocks/animate-on-scroll";
import GSAPHeroAnimation from "@/components/blocks/gsap-hero-animation";
import { LiquidGlass } from "@/components/core/liquid-glass";
import { TextShimmer } from "@/components/core/text-shimmer";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { ArrowUp, Calendar, Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showFounderMessage, setShowFounderMessage] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <GSAPHeroAnimation>
        <section
          className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20 relative overflow-visible mb-20"
          id="hero"
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0">
            <div className="w-full h-full relative">
              <Image
                src="/images/new-background.png"
                alt="Hero background"
                fill
                priority
                className="object-cover w-full h-full"
                style={{ zIndex: 0 }}
              />
            </div>
            {/* <div className="absolute inset-0 bg-[#020820]/50" /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#00030f59] to-[#0909092d]" style={{ zIndex: 1 }} />
          </div>
          <div className="w-full max-w-4xl flex flex-col items-center gap-12 my-40 relative z-10">
            <div className="text-center max-w-5xl">
              <div className="mx-auto mb-8 hero-text">
                <LiquidGlass>
                  <TextShimmer className="font-light text-white" duration={1.5}>
                    3 slots remained
                  </TextShimmer>
                </LiquidGlass>
              </div>
               <h1 className="text-6xl md:text-7xl font-normal mb-6 hero-text">
                 <span className="text-white" style={{ fontFamily: "var(--font-halant)" }}>
                   Boost Your Sales With Captivating, Conversion-Focused
                 </span>{" "}
                 <em
                   className="font-medium italic bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg"
                   style={{ 
                     fontFamily: "var(--font-instrument-serif)",
                     textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                   }}
                 >
                   Design And build.
                 </em>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 hero-text">
              Professional web & mobile interfaces that turn clicks into cash


              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center hero-text mb-44">
                <a href="https://calendly.com/ilyes-sissaoui/30mi">
                  <LiquidGlass>

                     <Button className="bg-transparent hover:bg-white hover:text-black text-white font-light px-4 py-4 text-lg rounded-full">
                      Book a free call
                      <Calendar className="ml-2 h-5 w-5" />
                    </Button>
                  </LiquidGlass>
                </a>
              </div>
            </div>
          </div>
          {/* Project Images Carousel */}
          <ProjectCarousel />
        </section>
      </GSAPHeroAnimation>

    
      {/* Specializations & Industries Section */}
      <AnimateOnScroll>
        <section
          id="specializations"
          className="py-32 px-8 relative overflow-hidden"
        >
          {/* Light Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#030303] to-[#171718]"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* We Specialise In Card */}
              <div 
                className="relative transform -rotate-2 lg:-rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ transformOrigin: 'center' }}
              >
                <div className="bg-[#06223f] backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl">
                  <h3 className="text-2xl font-normal text-blue-200 mb-8 tracking-wider" style={{ fontFamily: "var(--font-halant)" }}>
                    We Specialise In
                  </h3>
                  <div className="space-y-4"style={{ fontFamily: "var(--font-halant)" }}>
                    <div className="border-b border-blue-400/20 pb-3" >
                      <p className="text-white text-xl font-medium">PRODUCT DESIGN</p>
                    </div>
                    <div className="border-b border-blue-400/20 pb-3">
                      <p className="text-white text-xl font-medium">WEB DESIGN</p>
                    </div>
                    <div className="border-b border-blue-400/20 pb-3">
                      <p className="text-white text-xl font-medium">APP DESIGN</p>
                    </div>
                    <div className="border-b border-blue-400/20 pb-3">
                      <p className="text-white text-xl font-medium">0 TO 1 MVPS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries We Help Card */}
              <div 
                className="relative transform rotate-2 lg:rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ transformOrigin: 'center' , fontFamily: "var(--font-halant)" }}
              >
                <div className="bg-[#0b6764] backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 shadow-2xl">
                  <h3 className="text-3xl font-medium text-cyan-200 mb-8  tracking-wider">
                    Industries we help
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-cyan-400/20 pb-3">
                      <p className="text-white text-xl font-medium">SAAS</p>
                    </div>
                    <div className="border-b border-cyan-400/20 pb-3">
                      <p className="text-white text-xl font-medium">AGENCY</p>
                    </div>
                    <div className="border-b border-cyan-400/20 pb-3">
                      <p className="text-white text-xl font-medium">REAL ESTATE</p>
                    </div>
                    <div className="border-b border-cyan-400/20 pb-3">
                      <p className="text-white text-xl font-medium">FINANCE</p>
                    </div>
                    <div className="border-b border-cyan-400/20 pb-3">
                      <p className="text-white text-xl font-medium">HEALTH & FITNESS</p>
                    </div>
                    <div className="pb-3">
                      <p className="text-white text-xl font-medium">WEB 3</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8" id="why-us">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light mb-16 bg-gradient-to-r from-white to-[#0497ff] bg-clip-text text-transparent"style={{ fontFamily: "var(--font-halant)" }}>
                Why Choose Veyronix
               
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with creative excellence to
                deliver exceptional digital solutions
              </p>
            </div>
          </AnimateOnScroll>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-8" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-light mb-16 bg-gradient-to-r from-white to-[#0497ff] bg-clip-text text-transparent"style={{ fontFamily: "var(--font-halant)" }}>
              Our Portfolio
              
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See examples of our work in MVP development and landing page
              design
            </p>
          </div>

          <AnimateOnScroll>
            <div className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-4 md:px-0">
              <h3 className="text-2xl font-bold mb-16 text-white text-center">
                MVP Projects
              </h3>
              <div className="flex flex-col space-y-8 md:space-y-16 mb-24">
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="Dream-to-plan"
                    category="MVP"
                    description="A goal-setting app that transforms user dreams into actionable step-by-step plans instantly. Just enter your goal and get a personalized roadmap to start achieving today"
                    imageSrc="/images/dream_to_plan.png"
                  />
                </div>
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="DocuAlert"
                    category="MVP"
                    description="DocuAlert is a robust document management and expiration tracking solution designed to ensure organizations never miss a critical deadline. It provides secure storage and automated email reminders for expiring documents such as contracts, licenses, and certifications."
                    imageSrc="/images/docuAlert.jpg"
                  />
                </div>
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="WebAgency CRM"
                    category="MVP"
                    description="Manage leads, projects, and team collaboration all in one place. Built specifically for web design agencies to boost productivity and grow their business."
                    imageSrc="/images/crm.jpg"
                  />
                </div>
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="AdvenHive"
                    category="MVP"
                    description="A mobile app for planning adventures with AI-driven suggestions."
                    imageSrc="/images/mvp/Group 32.png"
                  />
                </div>
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="Peeps"
                    category="MVP"
                    description="A social media platform with features like user profiles, posts, and comments."
                    imageSrc="/images/mvp/GqqCNRjW4AAcp5x.jpeg"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-16 text-white text-center">
                Landing Pages
              </h3>
              <div className="flex flex-col space-y-8 md:space-y-16">
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="SaaS Product"
                    category="Web Design"
                    description="High-converting landing page for a B2B SaaS product with clear value proposition."
                    imageSrc="/images/landingpages/GovmrrfXcAAQy0z.jpeg"
                  />
                </div>
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="Mobile App"
                    category="Web Design"
                    description="Clean, modern landing page highlighting app features and download options."
                    imageSrc="/images/landingpages/Gq1lTLBXUAE8qNf.jpeg"
                  />
                </div>
                <div className="w-full h-[20rem] md:h-[50rem]">
                  <ProjectCard
                    title="Digital Agency"
                    category="Web Design"
                    description="Creative agency website showcasing services and portfolio with animated elements."
                    imageSrc="/images/landingpages/GqlEVV3WEAEEJ5Y.jpeg"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-light mb-16 bg-gradient-to-r from-white to-[#0497ff] bg-clip-text text-transparent"style={{ fontFamily: "var(--font-halant)" }}  >
              Our Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing options tailored to your specific needs and
              goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MVP Development */}
            <Card className="bg-white border border-gray-200 hover:border-[#0497ff] transition-all duration-300 flex flex-col h-full shadow-lg relative">
              <div className="absolute top-0 right-0">
                <div className="bg-[#0497ff] text-white font-semibold py-1 px-4 text-sm transform rotate-45 translate-x-2 translate-y-3 shadow-lg">
                  Popular
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900"style={{ fontFamily: "var(--font-halant)" }} >
                    MVP Development Package
                  </h3>
                  <div className="mb-6">
                    <span className="text-gray-600 text-sm">Starting at</span>
                    <div className="text-4xl font-bold text-[#0497ff]">
                      $1,200
                    </div>
                  </div>
                  <p className="text-[#0497ff] font-medium mb-6">
                    Limited availability - Only 3 spots this month.
                  </p>
                </div>

                <div className="flex-grow mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    What You Get:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Fully developed MVP in just 4–5 weeks",
                      "Web app or Android mobile app (Android only)",
                      "Modern, scalable tech stack tailored to your idea",
                      "Built-in integrations: payments, authentication, and more",
                      "Direct collaboration with the founder (me)",
                      "Transparent process with frequent updates",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-[#0497ff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://calendly.com/ilyes-sissaoui/30min"
                  className="mt-auto"
                >
                  <Button className="w-full bg-[#0497ff] hover:bg-[#0380d9] text-white font-semibold py-5 rounded-lg">
                    Get Started
                    <ArrowUp className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-blue-950 bg-opacity-70 border border-blue-800/30 backdrop-blur-sm hover:border-[#0497ff] transition-all duration-300 flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Growth Retainer
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-[#0497ff]">
                      $1,350
                      <span className="text-lg font-normal text-gray-300">
                        /month
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Cancel anytime, no long-term commitment
                    </span>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "60 development hours/month, fully dedicated to your product",
                      "Flexible use of hours across tasks and priorities",
                      "Weekly strategy sessions to align on goals and roadmap",
                      "Priority on feature development that moves the needle",
                      "Ongoing maintenance & performance tuning",
                      "Same-day emergency support when it matters most",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-[#0497ff] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://calendly.com/ilyes-sissaoui/30min"
                  className="mt-auto"
                >
                  <Button className="w-full bg-[#0497ff] hover:bg-[#0380d9] text-white font-semibold py-5 rounded-lg">
                    Get Started
                    <ArrowUp className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Need a custom solution? Contact us for a personalized quote
              tailored to your specific requirements.
            </p>
            <a href="https://wa.me/213674130077">
              <Button
                variant="outline"
                className="border-[#0497ff] text-[#0497ff] hover:bg-[#0497ff]/10 px-8 py-4 rounded-full"
              >
                Get Custom Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Meet The Founder Section */}
      <section className="py-20 px-8" id="founder">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Meet The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0497ff]">
                Founder
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <AnimateOnScroll>
              <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-[#0497ff]">
                <Image
                  src="/images/newimage.jpg"
                  alt="Ilyes - Founder of Veyronix"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="flex-1 max-w-2xl">
                <p className="text-xl text-gray-300 mb-6">
                  Hey, I&apos;m Ilyes, I run Veyronix, a design and development
                  studio where we help early-stage founders shape their ideas
                  into real products. From the first sketches to a clean,
                  working MVP and the landing page that sells it, we handle it
                  all with care.
                </p>
                <p className="text-xl text-gray-300 mb-6">
                  I only take on 3 clients a month so I can stay involved and
                  make sure every detail gets the attention it deserves.
                </p>
                <p className="text-xl text-gray-300">
                  If you&apos;re building something and want a partner who gets
                  both the design and the code, let&apos;s talk.
                </p>
                <div className="mt-8">
                  <a href="https://calendly.com/ilyes-sissaoui/30min">
                    <Button className="bg-[#0497ff] hover:bg-[#0380d9] text-white font-semibold px-8 py-6 text-lg rounded-full">
                      Schedule a Call
                      <Calendar className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
