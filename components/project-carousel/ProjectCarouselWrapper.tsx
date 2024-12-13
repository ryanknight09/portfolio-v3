"use client";

import { ProjectCarousel } from "@/components/project/ProjectCarousel";

interface Props {
  images: string[];
}

export const ProjectCarouselWrapper = ({ images }: Props) => {
  return <ProjectCarousel images={images} />;
};
