export interface Goal {
  category: 'soul';
  type:
    // Заметка
    "note"
    // Не начатая цель
    | "wait"
    // Начатая цель
    | "wip";
  text: string;
  // Айдишка, нужно для {parent}
  id?: string;
  // Если указан, то цель будет в группе цели с {id}
  // Типа так:
  // Цель1
  //   Подцель1
  //   Подцель2
  parent?: string;
}
