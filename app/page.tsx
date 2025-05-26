import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import {
  Code,
  Smartphone,
  Layout,
  Zap,
  Users,
  CheckCircle,
  Calendar,
  Check,
  ArrowUp,
} from "lucide-react";
import AnimateOnScroll from "@/components/blocks/animate-on-scroll";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1534]">
      {/* Hero Section */}
      <AnimateOnScroll>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20 relative overflow-hidden"
        id="hero"
      >
        <div className="absolute inset-0">
          <div className="w-full h-full relative">
            <Image
              src="/images/sky.jpg"
              alt="Sky background"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1534] to-transparent" />
        </div>
        <div className="w-full max-w-4xl flex flex-col items-center gap-12 my-40 relative z-10">
          <div className="text-center max-w-5xl">
            <div className="w-52 mx-auto mb-8 rounded-3xl   bg-yellow-100 p-4">
              <h1 className="text-yellow-600 font-semibold">
                MVP/Design Agency
              </h1>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-300">
              Build. Launch. Grow.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
              Whether it&apos;s a landing page or a full MVP, We craft clean, modern designs that help you go live faster and convert better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/ilyes-sissaoui/30mi">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold px-8 py-6 text-lg rounded-full">
                Book a free call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              </a>
    
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400  px-8 py-6 text-lg rounded-full"
              >
                Our Work
              </Button>
            </div>
          </div>
         
        </div>
      </section>
      </AnimateOnScroll>
 

      {/* Services Section */}
      <section className="py-20 px-8" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver end-to-end digital solutions that help businesses
              thrive in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#0d1534] bg-opacity-70 border border-[#0d1534]/30 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#0d1534]/50 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Smartphone className="h-8 w-8 text-yellow-300 group-hover:text-[#0d1534]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  MVP SaaS
                </h3>
                <p className="text-gray-300">
                Your MVP comes with a modern web app, an optimized landing page designed to drive action, and content crafted for search visibility, all built for speed, flexibility, and growth from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0d1534] bg-opacity-70 border border-[#0d1534] backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#0d1534]/50 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Layout className="h-8 w-8 text-yellow-300 group-hover:text-[#0d1534]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Landing Page Design
                </h3>
                <p className="text-gray-300">
                  High-converting, responsive landing pages designed to
                  captivate your audience and drive action.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0d1534] bg-opacity-70 border border-[#0d1534] backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#0d1534]/50 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Code className="h-8 w-8 text-yellow-300 group-hover:text-indigo-950" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Mobile/web Design
                </h3>
                <p className="text-gray-300">
                Beautiful, easy-to-use web and mobile designs that work on any device. Clean, fast, and built to make users feel at home.                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8" id="why-us">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Veyronix
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with creative excellence to deliver
              exceptional digital solutions
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-8" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See examples of our work in MVP development and landing page design
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white">MVP Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Dream-to-plan"
                category="MVP"
                description="A user-friendly MVP for tracking and managing your dreams."
                imageSrc="/images/mvp/Group 45830.jpg"
              />
              <ProjectCard
                title="AdvenHive"
                category="MVP"
                description="A mobile app for planning adventures with AI-driven suggestions."
                imageSrc="/images/mvp/Group 32.png"
              />
              <ProjectCard
                title="Peeps"
                category="MVP"
                description="A social media platform with features like user profiles, posts, and comments."
                imageSrc="/images/mvp/GqqCNRjW4AAcp5x.jpeg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Landing Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="SaaS Product"
                category="Web Design"
                description="High-converting landing page for a B2B SaaS product with clear value proposition."
                imageSrc="/images/landingpages/GovmrrfXcAAQy0z.jpeg"
              />
              <ProjectCard
                title="Mobile App"
                category="Web Design"
                description="Clean, modern landing page highlighting app features and download options."
                imageSrc="/images/landingpages/Gq1lTLBXUAE8qNf.jpeg"
              />
              <ProjectCard
                title="Digital Agency"
                category="Web Design"
                description="Creative agency website showcasing services and portfolio with animated elements."
                imageSrc="/images/landingpages/GqlEVV3WEAEEJ5Y.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing options tailored to your specific needs and
              goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MVP Development */}
            <Card className="bg-blue-950 bg-opacity-70 border border-yellow-400  backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 flex flex-col h-full">
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-400 text-blue-950 font-semibold py-1 px-4 text-sm transform rotate-45 translate-x-2 translate-y-3 shadow-lg">
                  Popular
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    MVP Development
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Transform your concept into a functional minimum viable
                    product
                  </p>
                  <div className="mb-6">
                    <span className="text-gray-400 text-sm">Starting from</span>
                    <div className="text-4xl font-bold text-yellow-400">
                      $2,200
                    </div>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-3">
                    {[
                      "Complete MVP development in 30 days",
                      "Mobile & Pwa version",
                      "Basic UI/UX design",
                      "Moden and scalable tech stack",
                      "Responsive design",
                      "Auth & Database integration",
                      "30 days of free maintenance",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="https://calendly.com/ilyes-sissaoui/30min" className="mt-auto">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold py-5 rounded-lg">
                    Get Started
                    <ArrowUp className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Landing Page Design */}
            <Card className="bg-blue-950 bg-opacity-70 border border-blue-800/30 backdrop-blur-sm transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Landing Page Design
                  </h3>
                  <p className="text-gray-300 mb-6">
                    High-converting landing pages that drive customer action
                  </p>
                  <div className="mb-6">
                    <span className="text-gray-400 text-sm">Starting from</span>
                    <div className="text-4xl font-bold text-yellow-400">
                      $200
                    </div>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-3">
                    {[
                      "Custom design & branding",
                      "Responsive for all devices",
                      "SEO optimization",
                      "Call-to-action optimization",
                      "Analytics integration",
                      "Fast loading speed",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="https://calendly.com/ilyes-sissaoui/30min" className="mt-auto">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold py-5 rounded-lg">
                    Get Started
                    <ArrowUp className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* App/Web Re-Design */}
            <Card className="bg-blue-950 bg-opacity-70 border border-blue-800/30 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 flex flex-col h-full">
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Mobile/Web Design
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Revitalize your existing digital products with modern design
                  </p>
                  <div className="mb-6">
                    <span className="text-gray-400 text-sm">Starting from</span>
                    <div className="text-4xl font-bold text-yellow-400">
                      $150
                    </div>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-3">
                    {[
                      "On-Demand Designs",
                      "Modern UI redesign",
                      "Mobile, Tablet & Desktop versions",
                      "3x Revisions",
                      "Handover & implementation support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="https://calendly.com/ilyes-sissaoui/30min" className="mt-auto">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold py-5 rounded-lg">
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
                className="border-yellow-400 text-yellow-400 hover:bg-indigo-900 px-8 py-4 rounded-full"
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
              Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Founder</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-yellow-400">
              <Image
                src="/images/thefounder.jpg"
                alt="Ilyes - Founder of Veyronix"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 max-w-2xl">
              <p className="text-xl text-gray-300 mb-6">
                Hey, I&apos;m Ilyes, I run Veyronix, a design and development studio where we help early-stage founders shape their ideas into real products. From the first sketches to a clean, working MVP and the landing page that sells it, we handle it all with care.
              </p>
              <p className="text-xl text-gray-300 mb-6">
                I only take on 3 clients a month so I can stay involved and make sure every detail gets the attention it deserves.
              </p>
              <p className="text-xl text-gray-300">
                If you&apos;re building something and want a partner who gets both the design and the code, let&apos;s talk.
              </p>
              <div className="mt-8">
                <a href="https://calendly.com/ilyes-sissaoui/30min">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold px-8 py-6 text-lg rounded-full">
                    Schedule a Call
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
