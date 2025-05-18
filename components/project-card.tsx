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
        <Card className="overflow-hidden bg-[#0d1534] bg-opacity-70 border border-[#0d1534]/30 backdrop-blur-sm group cursor-pointer"> <div className="relative h-64"> <Image src={imageSrc} alt={`${title} preview`} fill loading="eager" className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /> <div className="absolute inset-0 bottom-[-8px] bg-gradient-to-t from-[#0d1534] via-[#0d1534]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"> <div className="p-6"> <span className="text-yellow-400 text-sm font-medium"> {category} </span> <h3 className="text-xl font-bold text-white mt-1">{title}</h3> </div> </div> </div> <CardContent className="p-6"> <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3> <p className="text-gray-400 mb-4">{description}</p> </CardContent> </Card>
  );
}