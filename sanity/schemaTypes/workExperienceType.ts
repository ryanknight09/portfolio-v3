import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const workExperienceType = defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Company Name",
      type: "string",
      description: "The name of the company where you worked",
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "The title of the position held (e.g., Software Engineer)",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "companyName",
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the company (e.g., San Francisco, Remote)",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "The start date of your role",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description:
        "The end date of your role (leave empty if currently employed)",
    }),
    defineField({
      name: "isCurrent",
      title: "Currently Employed",
      type: "boolean",
      description: "Whether you are still employed in this role",
      initialValue: false,
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "technology" } }),
      ],
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
    defineField({
      title: "Linkedin url",
      name: "linkedin",
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
      jobTitle: "jobTitle",
      media: "mainImage",
    },
    prepare(selection) {
      const { jobTitle } = selection;
      return { ...selection, subtitle: jobTitle && jobTitle };
    },
  },
});
