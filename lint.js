/**
 * Скрипт чекает, что все md-файлы имеют метадату с title
 */

const util = require('util');

const glob = require("glob");
const MarkedMetaData = require("marked-metadata");

async function main() {
// Ищем все md-файлы
  const files = await util.promisify(glob,)("./content/**/**.md", {});

  const errors = [];

  for (const f of files) {
    let metadata;
    try {
      // Читаем и парсим md-файл на предмет метадаты
      const md = new MarkedMetaData(f);
      md.defineTokens('---', '---');
      metadata = md.metadata();
    } catch (e) {
      errors.push(`В файле нет блока с метадатой:\n${f}`);
    }

    // Чекаем есть ли title
    if (!metadata.title) {
      errors.push(`Не определен title в файле:\n${f}`);
    }

    // Чекаем есть ли description
    if (!metadata.description) {
      errors.push(`Не определен description в файле:\n${f}`);
    }
  }

  // Чекаем заполненность енвов
  ['NODE_ENV', 'PASSWORD'].forEach(
    (env) => {
      console.log(process.env[env]);
      if (!process.env[env]) {
        errors.push(`Не заполнен env: ${env}`);
      }
    }
  )

  if (errors.length) {
    throw errors;
  }
}

main()
  .then(function (r) {
    console.log("Все ОК!");
    process.exit(0);
  })
  .catch(function (errors) {
    errors.forEach(e => console.error(e));
    process.exit(1);
  });
