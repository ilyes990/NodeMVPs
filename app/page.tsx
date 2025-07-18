"use client";
import AnimateOnScroll from "@/components/blocks/animate-on-scroll";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-pattern";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import {
  ArrowUp,
  Calendar,
  Check,
  Code,
  Layout,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showFounderMessage, setShowFounderMessage] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#020820]">
      {/* Hero Section */}
      <AnimateOnScroll>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20 relative overflow-visible"
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
          {/* <div className="absolute inset-0 bg-[#020820]/50" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020820] via-[#010a2e81] to-transparent" />
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
              We turn your idea into full MVPs in weeks with clean, modern designs that help you launch faster, test smarter, and grow confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/ilyes-sissaoui/30mi">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-medium px-8 py-6 text-lg rounded-full">
                Book a free call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              </a>
    
            
            </div>
          </div>
         
        </div>
      </section>
      </AnimateOnScroll>

      {/* Founder Message Section */}
      <AnimateOnScroll>
        <section
          className="px-4 sm:px-8 md:px-20 py-12"
          id="founder-message"
        >
          <blockquote
            className="max-w-3xl mx-auto text-center text-gray-400 italic border-l-4 border-gray-700 pl-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <p className="text-xl mb-4">Dear founder, or future founder</p>
            {showFounderMessage ? (
              <div className="space-y-4">
                <p>
                  You&apos;ve been thinking about it for a while now, that app idea
                  that just won&apos;t leave your head, scribbled in notebooks,
                  pitched to friends, and day-dreamed about on your commute.
                </p>
                <p>
                  You know it could work, maybe even change the way people do
                  things, if only it could get out of your head and into the
                  hands of real users.
                </p>
                <p>
                  You&apos;ve seen others launch with less, sometimes with nothing
                  more than a landing page and a bit of nerve, and you can&apos;t
                  shake the feeling that you could be next.
                </p>
                <p>
                  But you keep hitting the same wall: you&apos;re not technical.
                </p>
                <p>
                  You don&apos;t know how to code, you don&apos;t have a CTO, and you&apos;re
                  not sure where to begin. You&apos;re already juggling strategy,
                  customers, and the never-ending to-do list that comes with
                  building a business.
                </p>
                <p>
                  So the idea just... sits there, collecting dust in Google
                  Docs and notes apps.
                </p>
                <p>
                  But here&apos;s the truth: you don&apos;t need to figure it all out
                  alone.
                </p>
                <p>You don&apos;t need to learn how to code or study YouTube tutorials.</p>
                <p>
                  You don&apos;t need to burn months sourcing the “perfect”
                  developer who might join once the MVP is done.
                </p>
                <p>
                  You just need a seasoned product team that gets it, and can
                  build fast.
                </p>
                <p>We work with founders like you every single day.</p>
                <p>
                  Non-technical creators with bold ideas and zero time to
                  waste.
                </p>
                <p>
                  We turn your concept into something real, something you can
                  launch, test, and iterate on, in weeks, not quarters.
                </p>
                <p>Your job is to think big, pitch the vision, and rally the market.</p>
                <p>
                  Ours is to make it real, fast, with quality, and with the
                  flexibility to evolve as your users give feedback.
                </p>
                <p className="font-medium text-yellow-200">
                  Sound like what you&apos;ve been looking for? Let&apos;s talk.
                </p>
              </div>
            ) : (
              <button
                className="mt-4 text-yellow-300 underline"
                onClick={() => setShowFounderMessage(true)}
              >
                Read more
              </button>
            )}
          </blockquote>
        </section>
      </AnimateOnScroll>

    
      {/* How It Works Section */}
      <AnimateOnScroll>
        <section id="how-it-works" className="py-20 px-8" style={{ fontFamily: 'var(--font-poppins)' }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-yellow-300">
              Here&apos;s how it works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Step 1 */}
               <GridPatternCard className="bg-[#0d1534] border-[#0d1534]/70">
                 <GridPatternCardBody className="flex flex-col items-center text-center space-y-4">
                   <div className="text-6xl font-extrabold text-yellow-300">1</div>
                   <h3 className="text-xl font-semibold text-white">Share Your Idea</h3>
                   <p className="text-gray-300 text-sm">
                     Send us your detailed idea &mdash; Android or web app &mdash; core
                     features, colors, style, and any examples you have.
                   </p>
                 </GridPatternCardBody>
               </GridPatternCard>

               {/* Step 2 */}
               <GridPatternCard className="bg-[#0d1534] border-[#0d1534]/70">
                 <GridPatternCardBody className="flex flex-col items-center text-center space-y-4">
                   <div className="text-6xl font-extrabold text-yellow-300">2</div>
                   <h3 className="text-xl font-semibold text-white">Free PRD &amp; Design</h3>
                   <p className="text-gray-300 text-sm">
                     We&apos;ll create a full PRD and Sketch Design for free, validate the
                     idea technically, and give you a clear timeline and price &mdash;
                     no surprises.
                   </p>
                 </GridPatternCardBody>
               </GridPatternCard>

               {/* Step 3 */}
               <GridPatternCard className="bg-[#0d1534] border-[#0d1534]/70">
                 <GridPatternCardBody className="flex flex-col items-center text-center space-y-4">
                   <div className="text-6xl font-extrabold text-yellow-300">3</div>
                   <h3 className="text-xl font-semibold text-white">Build Together</h3>
                   <p className="text-gray-300 text-sm">
                     If you&apos;re serious and ready to move fast, we&apos;ll give you our full
                     attention and top quality. We don&apos;t do guesswork or ghost
                     &mdash; and we expect the same from you.
                   </p>
                 </GridPatternCardBody>
               </GridPatternCard>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8" id="why-us">
        <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
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
          </AnimateOnScroll>
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
          
          <AnimateOnScroll>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white">MVP Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Dream-to-plan"
                category="MVP"
                description="A goal-setting app that transforms user dreams into actionable step-by-step plans instantly. Just enter your goal and get a personalized roadmap to start achieving today"
                imageSrc="/images/dream_to_plan.png"
              />
               <ProjectCard
                title="DocuAlert"
                category="MVP"
                description="DocuAlert is a robust document management and expiration tracking solution designed to ensure organizations never miss a critical deadline. It provides secure storage and automated email reminders for expiring documents such as contracts, licenses, and certifications."
                imageSrc="/images/docuAlert.jpg"
              />
              <ProjectCard
                title="WebAgency CRM"
                category="MVP"
                description="Manage leads, projects, and team collaboration all in one place. Built specifically for web design agencies to boost productivity and grow their business."
                imageSrc="/images/crm.jpg"
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
          </AnimateOnScroll>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MVP Development */}
            <Card className="bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 flex flex-col h-full shadow-lg relative">
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-400 text-blue-950 font-semibold py-1 px-4 text-sm transform rotate-45 translate-x-2 translate-y-3 shadow-lg">
                  Popular
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    MVP Development Package
                  </h3>
                  <div className="mb-6">
                    <span className="text-gray-600 text-sm">Starting at</span>
                    <div className="text-4xl font-bold text-yellow-500">
                      $1,200
                    </div>
                  </div>
                  <p className="text-yellow-600 font-medium mb-6">
                    Limited availability - Only 3 spots this month.
                  </p>
                </div>

                <div className="flex-grow mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Get:</h4>
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
                        <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
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

            <Card className="bg-blue-950 bg-opacity-70 border border-blue-800/30 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 flex flex-col h-full">
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                     Growth Retainer
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-yellow-400">
                      $1,350<span className="text-lg font-normal text-gray-300">/month</span>
                    </div>
                    <span className="text-gray-400 text-sm">Cancel anytime, no long-term commitment</span>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What&apos;s Included:</h4>
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
            <AnimateOnScroll>
              <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-yellow-400">
                <Image
                  src="/images/thefounderr.jpg"
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
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
