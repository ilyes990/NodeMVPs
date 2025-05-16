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
        <Card className="overflow-hidden bg-blue-950 bg-opacity-70 border border-blue-800/30 backdrop-blur-sm group cursor-pointer">
          <div className="relative h-64">
            <Image
              src={imageSrc}
              alt={`${title} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <span className="text-yellow-400 text-sm font-medium">
                  {category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            
          </CardContent>
        </Card>
  );
}