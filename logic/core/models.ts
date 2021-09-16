import {IContentDocument} from "@nuxt/content/types/content";
import {generateSeoHead} from "~/logic/core/seo";

/**
 * Статеечка
 */
export class CoreArticle {
  constructor(
    /**
     * То, что получается в результате: await $content({path}).fetch() as IContentDocument
     * Используется для отрисовки статьи: <nuxt-content :document="content"/>
     *
     * Может быть null, если нужно например только превью отобразить
     */
    public content: IContentDocument | null,
    /**
     * Путь к статье, напр. /cool-story/gigs-08-21
     */
    public path: string,
    /**
     * Название статьи
     */
    public title: string,
    /**
     * Описание статьи
     */
    public description: string,
    /**
     * Когда создана статья / дата события, описываемого в статье
     */
    public createdAt: Date,
    /**
     * Теги, типа ["epic"]
     * Используется пока только в некоторых кулстори
     */
    public tags: string[],
    /**
     * Если true, то заголовок будет центрированный h1, иначе h2
     */
    public big: boolean,
    /**
     * Обложка статьи
     */
    public cover?: string,
    /**
     * Иконочка, которая используется в названии статьи
     */
    public emote?: string,
    /**
     * Опциональные структурированные данные:
     * https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data?hl=ru
     */
    public ldjson?: object,
    /**
     * Показывать ли оглавление
     */
    public showToc?: boolean,
  ) {
  }

  /**
   * Дата статьи в виде строки
   */
  get createdAtStr() {
    return this.createdAt.toString().substr(0, 10);
  }

  /**
   * SEO-данные, типа всяких метатегов
   */
  get seoHead(): object {
    return generateSeoHead(this);
  }

  static tagToStr = {
    "epic": "Эпичное",
    "cooking": "Кукинг",
  }

  get tagStrings(): string[] {
    // @ts-ignore
    return this.tags.map(t => CoreArticle.tagToStr[t] ?? t);
  }

  /**
   * Создает статейку из nuxt-content странички:
   * CoreArticle.fromNuxtContent(await $content({path}).fetch() as IContentDocument)
   */
  static fromNuxtContent(page: IContentDocument): CoreArticle {
    return new CoreArticle(
      page,
      page.path,
      page.title,
      page.description,
      page.createdAt ?? new Date(),
      page.tags ?? [],
      page.big ?? false,
      page.cover,
      undefined,
      undefined,
      page.showToc
    );
  }
}
