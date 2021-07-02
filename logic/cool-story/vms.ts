import {IContentDocument} from "@nuxt/content/types/content";

export interface ArticleVM {
  rawArticle: IContentDocument;
  createdAtStr: string;
  title: string;
  link: string;
  tags: string[];
}

export function buildArticleVM(rawArticle: IContentDocument) {
  return {
    rawArticle,
    createdAtStr: rawArticle.createdAt.toString().substr(0, 10),
    title: rawArticle.title,
    link: `/cool-story/${rawArticle.slug}`,
    tags: (rawArticle.tags ?? []) as string[]
  }
}

export function tagToStr(tag: string) {
  switch (tag) {
    case "epic":
      return "Эпичная";
    case "cooking":
      return "Кукинг";
    default:
      return tag;
  }
}
