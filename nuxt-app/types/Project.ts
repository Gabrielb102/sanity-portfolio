import type { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Project {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt?: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
  walkthroughVideo?: string;
  liveLink?: string;
}
