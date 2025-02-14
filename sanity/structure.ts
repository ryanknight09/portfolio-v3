import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      S.documentTypeListItem("workExperience").title("Work Experience"),
      S.divider(),
      S.documentTypeListItem("technology").title("Technologies"),
      S.divider(),
      S.documentTypeListItem("hero").title("Hero"),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "post",
            "category",
            "author",
            "workExperience",
            "technology",
            "hero",
            "project",
          ].includes(item.getId()!)
      ),
    ]);
