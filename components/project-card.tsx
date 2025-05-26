'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';


type Technology = {
  name: string;
  icon?: string;
};

type ProjectProps = {
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  videoUrl?: string;
  technologies?: Technology[];
  downloadUrl?: string;
  imageSrc?: string;
};

export function ProjectCard({
  title,
  category,
  description,

  imageSrc = '/placeholder.svg?height=300&width=400',
}: ProjectProps) {
  return (
        <Card className="overflow-hidden bg-[#0d1534] bg-opacity-70 border border-[#0d1534]/30 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:border-yellow-400/30">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={`${title} preview`}
              fill
              loading="eager"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1534] via-[#0d1534]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-3">
                  {category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </Card>
  );
}