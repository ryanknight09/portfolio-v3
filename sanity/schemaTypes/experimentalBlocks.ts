import { PlugIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const experimentalBlock = defineType({
  name: "experimentalBlock",
  title: "Experimental Block",
  type: "document",
  icon: PlugIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
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
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Link",
      name: "href",
      type: "url",
      validation: (rule) =>
        rule
          .uri({
            scheme: ["https"],
          })
          .required(),
    }),
  ],
});
