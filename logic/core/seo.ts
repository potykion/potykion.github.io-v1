/**
 * Проставляет html-title + description-метатег
 *
 * Использование в компоненте:
 * head() {
 *    return generateSeoHead(
 *      "Про еду",
 *      'Пробую решить проблему "бля что поесть"'
 *    );
 * }
 *
 * @param title Заголовок
 * @param description Описание
 */
export function generateSeoHead(title: string, description: string) {
  return {
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
    ],
  };
}
