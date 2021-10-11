/**
 * Заменяет в {replacable} _ на элементы из {arr}
 *
 * >>> replaceWithArray("_ and _", ["ass", "tities"])
 * "ass and tities"
 *
 */
export function replaceWithArray(replacable: string, arr: string[]): string {
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


export function toTitleCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.substr(1);

}


export function replaceAll(str: string, what: string, to: string) {
  return str.split(what).join(to);
}
