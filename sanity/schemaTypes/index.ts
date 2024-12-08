import { type SchemaTypeDefinition } from "sanity";

import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { hero } from "./heroType";
import { postType } from "./postType";
import { projectType } from "./projectType";
import { technologyType } from "./technologyType";
import { workExperienceType } from "./workExperienceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    workExperienceType,
    technologyType,
    hero,
    projectType,
  ],
};
