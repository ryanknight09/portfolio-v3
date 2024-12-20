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
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "tag",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectNumber",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "technologies",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({ type: "reference", to: { type: "technology" } }),
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      validation: (rule) => rule.required(),
      type: "blockContent",
    }),
    defineField({
      name: "isPrivate",
      title: "Private",
      type: "boolean",
      description: "If the repository is private, will display a warning",
      initialValue: false,
    }),
    defineField({
      name: "hostingIssue",
      title: "Hosting Issue",
      type: "boolean",
      description:
        "If there is any issue with the hosted project, will display a warning",
      initialValue: false,
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
