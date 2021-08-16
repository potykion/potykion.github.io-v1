/**
 * Проставляет html-title, description-метатег, og-матетеги, twitter-метатеги
 *
 * Использование в компоненте:
 * head() {
 *    return generateSeoHead(
 *      "Про еду",
 *      'Пробую решить проблему "бля что поесть"',
 *      "/food",
 *    );
 * }
 *
 * @param title Заголовок
 * @param description Описание
 * @param path Путь к статье
 */
export function generateSeoHead(title: string, description: string, path: string) {
  return {
    title,
    meta: [
      {name: 'description',  content: description},
      {name: 'og:title',  content: title},
      {name: 'og:description',  content: description},
      {name: 'og:type',  content: "article"},
      {name: 'og:url',  content: `https://potyk.io${path}`},
      {name: 'og:site_name',  content: `Блог из-под палки`},
      {name: 'twitter:card',  content: "summary"},
      {name: 'twitter:creator',  content: "@potykion"},
      {name: 'twitter:title',  content: title},
      {name: 'twitter:description',  content: description},
    ],
  };
}
