import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context?.parent as { asset?: { _ref?: string } };

          return !value && parent?.asset?._ref
            ? "Alt text is required when an image is present"
            : true;
        }),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "tag",
      type: "string",
    }),
    defineField({
      name: "projectNumber",
      type: "number",
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
      name: "gallery",
      type: "array",
      of: [
        {
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
        },
      ],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "technology" } }),
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      title: "Hosted Url",
      name: "hostedHref",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["https"],
        }),
    }),
    defineField({
      title: "Github Url",
      name: "githubHref",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["https"],
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
