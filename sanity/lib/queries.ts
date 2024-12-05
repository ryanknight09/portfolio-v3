import { defineQuery } from "next-sanity";

export const TECHNOLOGY_QUERY =
  defineQuery(`*[_type == "technology" && defined(slug.current)][]{
  _id,
  title,
  slug,
  description,
  href,
  tag
}`);

export const EXPERIENCE_QUERY =
  defineQuery(`*[_type == "workExperience" && defined(slug.current)]|order(startDate desc)[0...12]{
  _id,
  title,
  slug,
  mainImage,
  description,
  jobTitle,
  startDate,
  endDate,
  isCurrent
}`);

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  technology,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);
