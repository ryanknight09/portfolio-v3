import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Full Name",
      type: "string",
      description: "My full name",
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "The title of my current position (e.g., Software Engineer)",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Where I currently residing",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "projectHighlights",
      title: "Project Highlights",
      type: "array",
      of: [{ type: "block" }],
      description: "Details of notable projects you worked on",
    }),
  ],
  preview: {
    select: {
      title: "title",
      jobTitle: "jobTitle",
      media: "mainImage",
    },
    prepare(selection) {
      const { jobTitle } = selection;
      return { ...selection, subtitle: jobTitle && jobTitle };
    },
  },
});
