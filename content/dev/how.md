---
title: Как блог делается
description: Стек, библиотечки, инструменты
---

### Работа с картинками

- Картинки должны находится по аналогичному пути
  - Например, для страницы `/dev/how` картинки должны находится в `/images/dev/how`
- Картинки нужно отображать, используя компоненты из `components/img`: `ImgBlock`, `ImgInlineBlock`
  - Элементы `ImgBlock` нужно оформлять в `ImgSwiper`
- Желательно, чтобы размер картинки не превышал 100 Кб
  - Сжать можно через телеграм или перевести в [WEBP](https://image.online-convert.com/convert-to-webp)

---


### Технологии

- **Стек:** [Nuxtjs](https://nuxtjs.org) + [Tailwindcss](https://tailwindcss.com/)
- **Рендер маркдауна**: [Nuxt Content](https://content.nuxtjs.org/)
- **Просмотрщик картинок:** [v-viewer](https://github.com/mirari/v-viewer)
- **Свайпер:** [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
- **Копирование текста**: [clipboardjs](https://clipboardjs.com)

---


### Инструменты

- [Генератор Favicon](https://favicon.io/favicon-converter/) 
- [Конвертер md > html](https://markdown-it.github.io/) 
- [Конвертер html > md](https://www.browserling.com/tools/html-to-markdown) 
- [html (де)енкодер](https://mothereff.in/html-entities) 
- [Обновлятор версии](https://www.npmjs.com/package/version-bump-prompt)
- [Твич емоуты](https://www.streamscheme.com/resources/emotes-meaning-complete-list-monkas-pogchamp-omegalul-kappa/) 
- [Генератор оттенков](https://maketintsandshades.com/) 
- [Дезигн инспирейшн](https://dribbble.com/) 
- [Транслитератор](https://translit.ru/seo/) 
- [Конвертер rem > px](http://www.standardista.com/px-to-rem-conversion-if-root-font-size-is-16px/)
- [Конвертер в WEBP]()

---

### Еще ссылочки 

- [Как делать блог от Вастрика](https://vas3k.ru/notes/how_to_blog/)
