import { PlugIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const technologyType = defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  icon: PlugIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "tag",
      type: "string",
    }),
    defineField({
      title: "Link",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["https"],
        }),
    }),
  ],
});
