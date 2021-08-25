---
title: Как блог делается
description: Стек, библиотечки, инструменты
big: true
---


### Процесс

- Идеи оформляются в [гх-ишью](https://github.com/potykion/potykion.github.io/issues) и добавляются на [доску](https://github.com/potykion/potykion.github.io/projects/1)
  
- Доска содержит такие колонки:
  - **Сортировочная фабрика** - новые задачки
  - **Лоу приорити** - задачки с низки приоритетом
  - **Хай приорити** - задачки с высокими приоритетом
  - **Что делать прямо сейчас** - задачи из Хай приорити, у которых назначен milestone
  - **Жду подачек с неба** - задачи, выполнение которых не зависит от меня (напр. проблема с библиотекой)
  - **Пассивки** - ишьюсы с инфой + задачки, которые выполняются сами собой (напр. [eng grammarrrr](https://github.com/potykion/potykion.github.io/issues/159) - задача будет выполнена, когда я сделаю все разделы по грамматике)
  - **Клозед** - выполненные задачки

- Задачи делаются в рамках [milestone](https://github.com/potykion/potykion.github.io/milestones), который длится 2 недели
- Новые статьи должны разрабатываться в отдельных ветках, для которых затем создаются pull request, в которых необходимо пройти [ряд проверок](https://github.com/potykion/potykion.github.io/blob/main/.github/pull_request_template.md)

- В конце недели проводятся ревью:
  - [Еженедельные ревью блога](https://github.com/potykion/potykion.github.io/issues/88) - редкие вопросы по блогу, которые надо обдумать; обдумывание того, что не нравится в блоге
  - [Ежедневные ревью днева](https://github.com/potykion/potykion.github.io/issues/90) - выписывание идей и мыслей из дневника / тетрадей + ишью; иногда не требуется, потому что идеи в ишью обычно сразу переводятся

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
