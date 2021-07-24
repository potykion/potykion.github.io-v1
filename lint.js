/**
 * Скрипт чекает, что все md-файлы имеют метадату с title
 */

const glob = require("glob");
const MarkedMetaData = require("marked-metadata");

// Ищем все md-файлы
glob("./content/**/**.md", {}, function (er, files) {
  files.forEach(
    f => {
      let metadata;
      try {
        // Читаем и парсим md-файл на предмет метадаты
        const md = new MarkedMetaData(f);
        md.defineTokens('---', '---');
        metadata = md.metadata();
      } catch (e) {
        throw `В файле нет блока с метадатой:\n${f}`;
      }

      // Чекаем есть ли title
      if (!metadata.title) {
        throw `Не определен title в файле:\n${f}`;
      }

      // Чекаем есть ли description в /dev-статье
      if (!metadata.description && f.includes("/dev/")) {
        throw `Не определен description в файле:\n${f}`;
      }

    }
  )
});

