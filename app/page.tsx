import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-bl from-black via-purple-950 to-black">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20 ">
        <Card className="w-full max-w-4xl bg-black bg-opacity-50 border border-transparent m-4 my-40">
          <CardContent className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center items-center order-first md:order-last">
            <Image
              src={"/images/mockup_website.png"}
              alt="MVP Agency Logo"
              width={400}
              height={400}
              className="rounded-lg"
            />
            </div>
           
           <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Turning Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-400">
                Impactful MVPs
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              We specialize in rapidly transforming your concepts into
              functional, market-ready Minimum Viable Products.
            </p>
           </div>
           
             
          </CardContent>
        </Card>
      </section>

      <section className=" px-8 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700">
            Our Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden bg-black bg-opacity-50 border border-transparent"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Project ${i} mockup`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-700">
                    Project {i}
                  </h3>
                  <p className="text-gray-600">
                    A brief description of the project and its impact.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
