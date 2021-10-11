import {slugify} from "transliteration";

/**
 * Транслитеррирует якори в статье
 *
 * То есть по умолчанию для заголовка
 * ## Заголовок
 * Сгенерится id=заголовок и ссылка /article#заголовок
 * Такая ссылка не сдвинет скролл на этот заголовок
 *
 * Так что надо транслиттерировать
 * То есть этот метод выставит id=zagolovok и ссылка будет такой /article#zagolovok
 * И скролл заробит
 *
 * Используется в pages/_.vue
 *
 * https://github.com/nuxt/content/issues/702#issuecomment-777743036
 */
export function fixIds(elements: any[] = []) {
  elements.forEach((el) => {
    if (el.props && el.props.id) {
      el.props.id = slugify(el.props.id)
    }
    if (el.id) {
      el.id = slugify(el.id)
    }
    if (el.children) {
      fixIds(el.children)
    }
  })
}
