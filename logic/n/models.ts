export interface Goal {
  category:
    'soul'
    | 'friends'
    | 'growth'
    | 'rest';
  type:
    // Заметка
    "note"
    // Не начатая цель
    | "wait"
    // Начатая цель
    | "wip";
  text: string;


  // Тоже самое что и {id} и {parent}
  children?: Goal[];
}
