# [potykion.github.io](https://potykion.github.io/)

Бложек с кулсторями, заметками про разработку и экспериенс жизненный.

## Обновление версии

0. Поставить [обновлятор](https://www.npmjs.com/package/version-bump-prompt):

  ```
  npm install -g @jsdevtools/version-bump-prompt
  ```

1. Заинкрементить версию + обновить в хедере:

  ```
  bump layouts/default.vue package.json package-lock.json
  ```


## Деплой ручками

```
npm run generate && npm run deploy
```
