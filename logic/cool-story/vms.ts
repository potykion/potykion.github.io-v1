import {IContentDocument} from "@nuxt/content/types/content";

export interface ArticleVM {
  rawArticle: IContentDocument;
  createdAtStr: string;
  title: string;
  link: string;
  tags: ArticleTagVM[];
}

export function buildArticleVM(rawArticle: IContentDocument) {
  return {
    rawArticle,
    createdAtStr: rawArticle.createdAt.toString().substr(0, 10),
    title: rawArticle.title,
    link: `/cool-story/${rawArticle.slug}`,
    tags: ((rawArticle.tags ?? []) as string[]).map(
      tag => {
        switch (tag) {
          case "epic":
            return {
              text: "Эпичная",
              bgColor: "bg-purple-600",
              textColor: "text-yellow-400",
            };
          case "cooking":
            return {
              text: "Кукинг",
              bgColor: "bg-yellow-300",
              textColor: "text-yellow-600",
            }
          default:
            return {
              text: tag,
              bgColor: "",
              textColor: "",
            }
        }
      }
    )
  }
}


export interface ArticleTagVM {
  // slug: string;
  text: string;
  textColor: string;
  bgColor: string;
}
