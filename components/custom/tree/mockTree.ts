import { type TreeNode } from "@/types/TreeNode";

export type MockData = { content: string };

export const mockTree: TreeNode<MockData> = {
  name: "root",
  isDirectory: true,
  isSynced: true,
  children: [
    {
      name: "Documents",
      isDirectory: true,
      isSynced: true,
      children: [
        {
          name: "Resume.docx",
          isDirectory: false,
          size: 2048,
          lastModified: new Date("2024-12-01T10:00:00-08:00"),
          data: { content: "My resume content" },
          isSynced: true,
        },
        {
          name: "CoverLetter.docx",
          isDirectory: false,
          size: 1024,
          lastModified: new Date("2024-12-02T10:00:00-08:00"),
          data: { content: "My cover letter content" },
          isSynced: false,
        },
      ],
    },
    {
      name: "Pictures",
      isDirectory: true,
      isSynced: false,
      children: [
        {
          name: "Vacation.jpg",
          isDirectory: false,
          size: 5120,
          lastModified: new Date("2024-12-10T10:00:00-08:00"),
          data: { content: "Picture from vacation" },
          isSynced: true,
        },
        {
          name: "Family.png",
          isDirectory: false,
          size: 4096,
          lastModified: new Date("2024-12-11T10:00:00-08:00"),
          data: { content: "Family picture" },
          isSynced: false,
        },
      ],
    },
    {
      name: "Projects",
      isDirectory: true,
      isSynced: true,
      children: [
        {
          name: "ProjectA",
          isDirectory: true,
          isSynced: true,
          children: [
            {
              name: "index.js",
              isDirectory: false,
              size: 256,
              lastModified: new Date("2024-12-15T10:00:00-08:00"),
              data: { content: "Entry point for Project A" },
              isSynced: true,
            },
            {
              name: "style.css",
              isDirectory: false,
              size: 128,
              lastModified: new Date("2024-12-16T10:00:00-08:00"),
              data: { content: "Styles for Project A" },
              isSynced: true,
            },
          ],
        },
        {
          name: "ProjectB",
          isDirectory: true,
          isSynced: false,
          children: [
            {
              name: "main.py",
              isDirectory: false,
              size: 512,
              lastModified: new Date("2024-12-17T10:00:00-08:00"),
              data: { content: "Main script for Project B" },
              isSynced: true,
            },
          ],
        },
      ],
    },
  ],
};
