import {IContentDocument} from "@nuxt/content/types/content";

export interface ArticleVM {
  rawArticle: IContentDocument;
  createdAtStr: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  tagStrings: string[];
}

export function buildArticleVM(rawArticle: IContentDocument) {
  const tags = (rawArticle.tags ?? []) as string[];

  return {
    rawArticle,
    createdAtStr: rawArticle.createdAt.toString().substr(0, 10),
    title: rawArticle.title,
    description: rawArticle.description,
    link: rawArticle.path,
    tags,
    // @ts-ignore
    tagStrings: tags.map(t => tagToStr[t] ?? t),
  }
}

export const tagToStr = {
  "epic": "Эпичное",
  "cooking": "Кукинг",
}

