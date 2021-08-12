import {IContentDocument} from "@nuxt/content/types/content";

/**
 * ВМка статьи = IContentDocument + доп-поля, типа даты, тегов
 */
export interface ArticleVM {
  rawArticle: IContentDocument;
  createdAtStr: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  tagStrings: string[];
}

/**
 * Создает ВМку статьи
 * @param rawArticle - Страничка, полученная в результате $content("...").fetch(), или объект {title, description, path}
 */
export function buildArticleVM(rawArticle: IContentDocument) {
  const tags = (rawArticle.tags ?? []) as string[];
  const createdAtStr = (rawArticle.createdAt ?? Date.now()).toString().substr(0, 10)

  return {
    rawArticle,
    createdAtStr,
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

