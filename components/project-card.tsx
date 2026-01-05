'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';


type Technology = {
  name: string;
  icon?: string;
};

type ProjectProps = {
  // title: string;
  // category: string;
  // description: string;
  // longDescription?: string;
  // videoUrl?: string;
  // technologies?: Technology[];
  // downloadUrl?: string;
  imageSrc?: string;
};

export function ProjectCard({
  // title,
  // category,
  // description,
  imageSrc = '/placeholder.svg?height=300&width=400',
}: ProjectProps) {
  return (
        <Card className="overflow-hidden bg-[#0d1534] bg-opacity-70 border border-[#0d1534]/30 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:border-white/20 h-full rounded-3xl p-0">
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Image
              src={imageSrc}
              alt={` preview`}
              fill
              loading="eager"
              className="object-contain md:object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 90vw"
            />
          </div>
        </Card>
  );
}