import {CoreArticle} from "~/logic/core/models";

/**
 * Генерирует объект с SEO-метадатой (title, description, og-tags, ldjson)
 *
 * Используется обычно вместе с {CoreArticle} в {Component.head}:
 * head() {
 *   return this.article.head;
 * }
 */
export function generateSeoHead(
  article: CoreArticle
) {
  return {
    title: article.title,
    meta: [
      {name: 'description', content: article.description},
      {property: 'og:title', content: article.title},
      {property: 'og:description', content: article.description},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: `https://potyk.io${article.path}`},
      {property: 'og:site_name', content: `Блог из-под палки`},
      {name: 'twitter:card', content: "summary_large_image"},
      {name: 'twitter:creator', content: "@potykion"},
      {name: 'twitter:title', content: article.title},
      {name: 'twitter:description', content: article.description},

      ...(article.cover ? [
        {property: "og:image", content: article.cover},
        {name: "twitter:image", content: article.cover},
      ] : [])

    ],
    script: [{
      hid: 'ldjson-schema',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        ...(article.ldjson ?? {
          "@type": "BlogPosting",
          "datePublished": article.createdAtStr,
          "headline": article.title,
          "name": article.title,
          "description": article.description,
          "author": {
            "@type": "Person",
            "name": "Nikita Leybovich",
            "url": "https://potyk.io/n"
          },
          ...(article.content ? {image: article.cover} : {})
        })
      }),
      type: 'application/ld+json'
    }],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['innerHTML']
    },
  };
}
