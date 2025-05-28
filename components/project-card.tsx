'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';


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
          <div className="relative h-[250px] md:h-[300px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={`${title} preview`}
              fill
              loading="eager"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <span className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-3">
              {category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">
              {description}
            </p>
          </div>
        </Card>
  );
}