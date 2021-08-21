/**
 * Заменяет в {replacable} _ на элементы из {arr}
 *
 * >>> replaceWithArray("_ and _", ["ass", "tities"])
 * "ass and tities"
 *
 */
export function replaceWithArray(replacable: string, arr: string[]) {
  const underscoreCharCount = replacable.split("").filter(c => c === "_").length;
  if (underscoreCharCount !== arr.length) {
    throw `Кол-во _ в {replacable} (${replacable}) != длине массива {arr} (${arr})`;
  }

  let res = "";
  // todo переписать, используя reduce
  replacable
    .split("_")
    .forEach((part, index) => res += part + (arr[index] ?? ""));
  return res;
}
