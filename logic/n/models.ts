export interface Goal {
  category:
    'health' |
    'money' |
    'work' |
    'rel' |
    'friends' |
    'growth' |
    "rest" |
    "soul";
  type:
  // Заметка
    "note" |
    // Не начатая цель
    "wait" |
    // Начатая цель
    "wip" |
    // Привычка
    "habit" |
    // Выполненная
    "done";
  text: string;


  // Тоже самое что и {id} и {parent}
  children?: Goal[];
}
