/**
 * Проставляет html-title, метатеги, структурированные данные
 *
 * Использование в компоненте:
 * head() {
 *    return generateSeoHead(
 *      "Про еду",
 *      'Пробую решить проблему "бля что поесть"',
 *      "/food",
 *      "2021-08-11",
 *    );
 * }
 *
 * @param title Заголовок
 * @param description Описание
 * @param path Путь к статье
 * @param created Когда статья создана
 */
export function generateSeoHead(
  title: string,
  description: string,
  path: string,
  created: string,
) {
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
    script: [{
      hid: 'ldjson-schema',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org" ,
        "@type": "BlogPosting",
        "datePublished": created,
        "headline": title,
        "name": title,
        "articleBody": description,
        "description": description,
        "author": {
          "name": "Nikita Leybovich"
        }

      }),
      type: 'application/ld+json'
    }],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['innerHTML']
    },
  };
}
