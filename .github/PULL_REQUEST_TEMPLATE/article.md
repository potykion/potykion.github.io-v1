# Чеклист для статьи

- [ ] Нормальные названия ссылок, а не [тут](), [вот]()
- [ ] Определить `title` + `description` в хедере статьи или использовать `generateSeoHead`
- [ ] Картинки хранятся по аналогичному пути
  - Напр. для `/dev/vue/bio` картинки хранятся в `/images/dev/vue/bio/admin-2020.png`
- [ ] Картинки оформлять в `new-img-row` + `img-slide`, указывая `alt`
  ```
  <new-img-row>
    <img-slide src="/images/dev/vue/bio/admin-2020.png" alt="Новый диз админки"></img-slide>
  </new-img-row>
  ```

