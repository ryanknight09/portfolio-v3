import {
  type internalGroqTypeReferenceTo,
  type SanityImageCrop,
  type SanityImageHotspot,
} from "@/sanity/types";

export type MainImage = {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
} | null;
